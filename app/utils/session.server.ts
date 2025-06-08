import { storage } from "../../server/storage";

export async function getCurrentUser(request: Request) {
  const cookie = request.headers.get("Cookie");
  if (!cookie) {
    return null;
  }

  // Parse the user_session cookie
  const userSessionMatch = cookie.match(/user_session=([^;]+)/);
  if (!userSessionMatch) {
    return null;
  }

  const userId = userSessionMatch[1];
  if (!userId) {
    return null;
  }

  try {
    // Get user by ID from database
    const user = await storage.getUser(userId);
    return user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

export function requireUser(user: any) {
  if (!user) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return user;
}

