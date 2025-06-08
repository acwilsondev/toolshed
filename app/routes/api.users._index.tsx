import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getUsers, createUser } from "~/utils/db.server";
import type { CreateUserRequest } from "~/utils/types";

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

    const users = await getUsers(limit, offset);
    return json(users);

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Get users error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    requireAuth(request);

    const body: CreateUserRequest = await request.json();
    
    if (!body.name || !body.email || !body.password) {
      return json({ error: "Name, email, and password are required" }, { status: 400 });
    }

    const user = await createUser(body);
    return json(user, { status: 201 });

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Create user error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}