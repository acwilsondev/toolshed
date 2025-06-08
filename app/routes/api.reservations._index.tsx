import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getReservations } from "~/utils/db.server";

function requireAuth(request: Request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return authHeader.replace("Bearer ", "");
}

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    requireAuth(request);

    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get("limit") || "50");
    const offset = parseInt(url.searchParams.get("offset") || "0");
    const itemId = url.searchParams.get("item_id") || undefined;
    const requesterId = url.searchParams.get("requester_id") || undefined;
    const status = url.searchParams.get("status") || undefined;

    const reservations = await getReservations(limit, offset, itemId, requesterId, status);
    return json(reservations);

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Get reservations error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}