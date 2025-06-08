import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getReservationById } from "~/utils/db.server";

function requireAuth(request: Request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return authHeader.replace("Bearer ", "");
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  try {
    requireAuth(request);

    const { id } = params;
    if (!id) {
      return json({ error: "Reservation ID is required" }, { status: 400 });
    }

    const reservation = await getReservationById(id);
    if (!reservation) {
      return json({ error: "Reservation not found" }, { status: 404 });
    }

    return json(reservation);

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Get reservation error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}