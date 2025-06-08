import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getReservationEvents, createReservationEvent } from "~/utils/db.server";
import { ReservationValidationService } from "~/utils/reservationValidator.server";
import type { CreateReservationEventRequest } from "~/utils/types";
import { ReservationEventType } from "~/utils/types";

function requireAuth(request: Request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return authHeader.replace("Bearer ", "");
}

function extractUserIdFromToken(token: string): string {
  // In production, decode the JWT and extract user ID
  // For demo, extract from mock token format: "mock-jwt-token-{userId}"
  return token.replace("mock-jwt-token-", "");
}

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    requireAuth(request);

    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get("limit") || "50");
    const offset = parseInt(url.searchParams.get("offset") || "0");
    const reservationId = url.searchParams.get("reservation_id") || undefined;
    const afterTimestamp = url.searchParams.get("after_timestamp") 
      ? new Date(url.searchParams.get("after_timestamp")!) 
      : undefined;

    const events = await getReservationEvents(limit, offset, reservationId, afterTimestamp);
    return json(events);

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Get reservation events error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const token = requireAuth(request);
    const actorId = extractUserIdFromToken(token);

    const body: CreateReservationEventRequest = await request.json();
    
    if (!body.event_type) {
      return json({ error: "event_type is required" }, { status: 400 });
    }

    // Convert date strings to Date objects
    if (body.start_date && typeof body.start_date === 'string') {
      body.start_date = new Date(body.start_date);
    }
    if (body.end_date && typeof body.end_date === 'string') {
      body.end_date = new Date(body.end_date);
    }

    // Validate new reservation requests to prevent overlapping reservations
    if (body.event_type === ReservationEventType.REQUESTED && body.item_id) {
      const validator = new ReservationValidationService();
      const validationResult = await validator.validateNewReservation(body, body.item_id);
      
      if (!validationResult.isValid) {
        return json({ 
          error: "Reservation validation failed", 
          details: validationResult.errors 
        }, { status: 409 });
      }
      
      // Include warnings in response metadata if present
      if (validationResult.warnings && validationResult.warnings.length > 0) {
        console.log('Reservation warnings:', validationResult.warnings);
      }
    }

    const event = await createReservationEvent(body, actorId);
    return json(event, { status: 201 });

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    
    if (error instanceof Error) {
      if (error.message.includes("insufficient quantity") || error.message.includes("not found")) {
        return json({ error: error.message }, { status: 409 });
      }
      return json({ error: error.message }, { status: 400 });
    }
    
    console.error("Create reservation event error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}