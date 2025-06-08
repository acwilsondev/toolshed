import { redirect, type LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  // Clear the session cookie by setting it to expire immediately
  return redirect("/?logout=true", {
    headers: {
      "Set-Cookie": "user_session=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict"
    }
  });
}

export default function Logout() {
  // This component won't render since we always redirect
  return null;
}