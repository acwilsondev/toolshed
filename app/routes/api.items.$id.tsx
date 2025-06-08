import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getItemById, updateItem, deleteItem } from "~/utils/db.server";
import { ItemUpdateValidationService } from "~/utils/itemUpdateValidator.server";
import type { CreateItemRequest } from "~/utils/types";

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
      return json({ error: "Item ID is required" }, { status: 400 });
    }

    const item = await getItemById(id);
    if (!item) {
      return json({ error: "Item not found" }, { status: 404 });
    }

    return json(item);

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Get item error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function action({ request, params }: ActionFunctionArgs) {
  try {
    requireAuth(request);

    const { id } = params;
    if (!id) {
      return json({ error: "Item ID is required" }, { status: 400 });
    }

    if (request.method === "PUT") {
      const body: CreateItemRequest = await request.json();
      
      // Validate the update, especially quantity changes against active reservations
      const validator = new ItemUpdateValidationService();
      const validationResult = await validator.validateItemUpdate(id, body);
      
      if (!validationResult.isValid) {
        return json({
          error: "Item update validation failed",
          details: validationResult.errors,
          warnings: validationResult.warnings
        }, { status: 409 });
      }
      
      const item = await updateItem(id, body);
      if (!item) {
        return json({ error: "Item not found" }, { status: 404 });
      }

      // Include any warnings in the success response
      return json({
        ...item,
        ...(validationResult.warnings && { _warnings: validationResult.warnings })
      });

    } else if (request.method === "DELETE") {
      // Validate deletion against active reservations
      const validator = new ItemUpdateValidationService();
      const validationResult = await validator.validateItemDeletion(id);
      
      if (!validationResult.isValid) {
        return json({
          error: "Item deletion validation failed",
          details: validationResult.errors
        }, { status: 409 });
      }
      
      const success = await deleteItem(id);
      if (!success) {
        return json({ error: "Item not found" }, { status: 404 });
      }

      return new Response(null, { status: 204 });

    } else {
      return json({ error: "Method not allowed" }, { status: 405 });
    }

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Item action error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}