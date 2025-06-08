import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getHealthStatus } from "~/utils/db.server";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const health = getHealthStatus();
    return json(health);
  } catch (error) {
    console.error("Health check error:", error);
    return json({ 
      status: "unhealthy",
      error: "Internal server error" 
    }, { status: 500 });
  }
}