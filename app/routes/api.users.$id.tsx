import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getUserById, updateUser, deleteUser } from "~/utils/db.server";
import type { CreateUserRequest } from "~/utils/types";

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
      return json({ error: "User ID is required" }, { status: 400 });
    }

    const user = await getUserById(id);
    if (!user) {
      return json({ error: "User not found" }, { status: 404 });
    }

    return json(user);

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Get user error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function action({ request, params }: ActionFunctionArgs) {
  try {
    requireAuth(request);

    const { id } = params;
    if (!id) {
      return json({ error: "User ID is required" }, { status: 400 });
    }

    if (request.method === "PUT") {
      const body: CreateUserRequest = await request.json();
      
      const user = await updateUser(id, body);
      if (!user) {
        return json({ error: "User not found" }, { status: 404 });
      }

      return json(user);

    } else if (request.method === "DELETE") {
      const success = await deleteUser(id);
      if (!success) {
        return json({ error: "User not found" }, { status: 404 });
      }

      return new Response(null, { status: 204 });

    } else {
      return json({ error: "Method not allowed" }, { status: 405 });
    }

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("User action error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}