import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getItems, createItem } from "~/utils/db.server";
import type { CreateItemRequest } from "~/utils/types";

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

    const items = await getItems(limit, offset);
    return json(items);

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Get items error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    requireAuth(request);

    const body: CreateItemRequest = await request.json();
    
    if (!body.owner_id || !body.title || !body.category || !body.location || !body.quantity_total) {
      return json({ 
        error: "owner_id, title, category, location, and quantity_total are required" 
      }, { status: 400 });
    }

    const item = await createItem(body);
    return json(item, { status: 201 });

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Create item error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}