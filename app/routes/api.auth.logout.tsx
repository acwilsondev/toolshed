import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const authHeader = request.headers.get("Authorization");
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return json({ error: "Invalid or missing token" }, { status: 401 });
    }

    // In production, invalidate the JWT token
    return json({ message: "Successfully logged out" }, { status: 200 });

  } catch (error) {
    console.error("Logout error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}