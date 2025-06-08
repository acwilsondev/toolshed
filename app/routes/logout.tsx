import { redirect, type LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  // In a real app, this would clear the session
  // For demo, just redirect to home
  return redirect("/?logout=true");
}

export default function Logout() {
  // This component won't render since we always redirect
  return null;
}