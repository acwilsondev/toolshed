import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { authenticateUser, initializeDatabase } from "~/utils/db.server";
import type { LoginRequest, AuthResponse } from "~/utils/types";
import jwt from "jsonwebtoken";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    // Initialize database with sample data if needed
    await initializeDatabase();

    const body: LoginRequest = await request.json();
    
    if (!body.email || !body.password) {
      return json({ error: "Email and password are required" }, { status: 400 });
    }

    const user = await authenticateUser(body.email, body.password);
    
    if (!user) {
      return json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET || "dev-secret-key",
      { expiresIn: "24h" }
    );
    
    const response: AuthResponse = { token };
    return json(response, { status: 200 });

  } catch (error) {
    console.error("Login error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}