import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { authenticateUser } from "~/utils/db.server";
import type { LoginRequest, AuthResponse } from "~/utils/types";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body: LoginRequest = await request.json();
    
    if (!body.email || !body.password) {
      return json({ error: "Email and password are required" }, { status: 400 });
    }

    const user = await authenticateUser(body.email, body.password);
    
    if (!user) {
      return json({ error: "Invalid credentials" }, { status: 401 });
    }

    // In production, generate a proper JWT token
    const token = `mock-jwt-token-${user.id}`;
    
    const response: AuthResponse = { token };
    return json(response, { status: 200 });

  } catch (error) {
    console.error("Login error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}