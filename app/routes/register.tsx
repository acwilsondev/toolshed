import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { json, redirect, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { createUser } from "~/utils/db.server";

export const meta: MetaFunction = () => {
  return [{ title: "Join Community - Toolshed" }];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const confirmPassword = formData.get("confirmPassword")?.toString();
  const neighborhood = formData.get("neighborhood")?.toString();
  const contactMethod = formData.get("contactMethod")?.toString();

  if (!name || !email || !password || !confirmPassword) {
    return json({ error: "All fields are required" }, { status: 400 });
  }

  if (password !== confirmPassword) {
    return json({ error: "Passwords do not match" }, { status: 400 });
  }

  if (password.length < 6) {
    return json({ error: "Password must be at least 6 characters long" }, { status: 400 });
  }

  try {
    const user = await createUser({
      name,
      email,
      password,
      neighborhood: neighborhood || '',
      contact_method: contactMethod || 'message'
    });

    return redirect(`/profile?welcome=true&new=true`);

  } catch (error: any) {
    if (error.message?.includes('unique constraint') || error.message?.includes('already exists')) {
      return json({ error: "An account with this email already exists" }, { status: 400 });
    }
    console.error("Registration error:", error);
    return json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

export default function Register() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
      <div className="form">
        <div className="text-center mb-8">
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Join the Community
          </h1>
          <p style={{ color: "#6b7280" }}>
            Start sharing tools with your neighbors
          </p>
        </div>

        <Form method="post">
          {actionData?.error && (
            <div className="error" style={{ 
              backgroundColor: "#fdf2f2", 
              border: "1px solid #D96C33", 
              borderRadius: "6px", 
              padding: "0.75rem",
              marginBottom: "1rem"
            }}>
              {actionData.error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="form-input"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="form-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="neighborhood">Neighborhood</label>
            <input
              id="neighborhood"
              name="neighborhood"
              type="text"
              className="form-input"
              placeholder="e.g. Downtown, Riverside"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactMethod">Preferred Contact Method</label>
            <select
              id="contactMethod"
              name="contactMethod"
              className="form-input"
            >
              <option value="message">In-app messaging</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="form-input"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="form-input"
              placeholder="Confirm your password"
            />
          </div>

          <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
            <input
              id="agree-terms"
              name="agree-terms"
              type="checkbox"
              required
              style={{ marginRight: "0.5rem" }}
            />
            <label htmlFor="agree-terms" style={{ fontSize: "0.875rem" }}>
              I agree to the{" "}
              <Link to="/terms" style={{ color: "#2563eb", textDecoration: "underline" }}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" style={{ color: "#2563eb", textDecoration: "underline" }}>
                Privacy Policy
              </Link>
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{ width: "100%", opacity: isSubmitting ? 0.5 : 1 }}
            >
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>
          </div>
        </Form>

        <div style={{ 
          marginTop: "1.5rem", 
          paddingTop: "1.5rem", 
          borderTop: "1px solid #e5e7eb", 
          textAlign: "center" 
        }}>
          <p style={{ color: "#6b7280", marginBottom: "1rem" }}>Already have an account?</p>
          <Link
            to="/login"
            className="btn btn-secondary"
            style={{ width: "100%" }}
          >
            Sign in instead
          </Link>
        </div>
      </div>
    </div>
  );
}