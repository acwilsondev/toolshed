import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { reservationValidator, type DateRange } from "~/utils/reservationValidator.server";
import { getItemById } from "~/utils/db.server";

function requireAuth(request: Request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return authHeader.replace("Bearer ", "");
}

/**
 * GET /api/items/:id/availability
 * 
 * Check availability for an item during a specific date range.
 * Query parameters:
 * - start_date: ISO date string
 * - end_date: ISO date string
 * 
 * Returns:
 * {
 *   available_quantity: number,
 *   total_quantity: number,
 *   is_available: boolean,
 *   overlapping_reservations: number
 * }
 */
export async function loader({ request, params }: LoaderFunctionArgs) {
  try {
    requireAuth(request);

    const { id } = params;
    if (!id) {
      return json({ error: "Item ID is required" }, { status: 400 });
    }

    const url = new URL(request.url);
    const startDateParam = url.searchParams.get("start_date");
    const endDateParam = url.searchParams.get("end_date");
    const quantityParam = url.searchParams.get("quantity");

    if (!startDateParam || !endDateParam) {
      return json(
        { error: "start_date and end_date query parameters are required" },
        { status: 400 }
      );
    }

    const startDate = new Date(startDateParam);
    const endDate = new Date(endDateParam);
    const requestedQuantity = quantityParam ? parseInt(quantityParam) : 1;

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return json(
        { error: "Invalid date format. Use ISO date strings." },
        { status: 400 }
      );
    }

    if (startDate >= endDate) {
      return json(
        { error: "start_date must be before end_date" },
        { status: 400 }
      );
    }

    // Get item details
    const item = await getItemById(id);
    if (!item) {
      return json({ error: "Item not found" }, { status: 404 });
    }

    // Check availability
    const dateRange: DateRange = {
      startDate,
      endDate
    };

    const overlapInfo = await reservationValidator.checkOverlappingReservations(
      id,
      dateRange,
      requestedQuantity
    );

    const response = {
      item_id: id,
      date_range: {
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString()
      },
      total_quantity: item.quantity_total,
      available_quantity: overlapInfo.availableQuantity,
      requested_quantity: requestedQuantity,
      is_available: overlapInfo.availableQuantity >= requestedQuantity,
      overlapping_reservations: overlapInfo.overlappingReservations.length,
      conflicts: overlapInfo.overlappingReservations.map(reservation => ({
        reservation_id: reservation.id,
        requester_id: reservation.requester_id,
        quantity: reservation.quantity_requested,
        start_date: reservation.start_date?.toISOString(),
        end_date: reservation.end_date?.toISOString(),
        status: reservation.status
      }))
    };

    return json(response);

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Check availability error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}

