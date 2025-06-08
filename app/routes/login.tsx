import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { json, redirect, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { authenticateUser } from "~/utils/db.server";
import jwt from "jsonwebtoken";

export const meta: MetaFunction = () => {
  return [{ title: "Sign In - Toolshed" }];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return json({ error: "Email and password are required" }, { status: 400 });
  }

  try {
    const user = await authenticateUser(email, password);
    
    if (!user) {
      return json({ error: "Invalid email or password" }, { status: 401 });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    );

    return redirect("/profile", {
      headers: {
        "Set-Cookie": `auth_token=${token}; HttpOnly; Path=/; Max-Age=${7 * 24 * 60 * 60}; SameSite=Strict; Secure`
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

export default function Login() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
      <div className="form">
        <div className="text-center mb-8">
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Sign in to Toolshed
          </h1>
          <p style={{ color: "#6b7280" }}>
            Welcome back to your community
          </p>
        </div>

        <Form method="post">
          {actionData?.error && (
            <div className="error" style={{ 
              backgroundColor: "#fef2f2", 
              border: "1px solid #fecaca", 
              borderRadius: "6px", 
              padding: "0.75rem",
              marginBottom: "1rem"
            }}>
              {actionData.error}
            </div>
          )}

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
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="form-input"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                style={{ marginRight: "0.5rem" }}
              />
              <label htmlFor="remember-me" style={{ fontSize: "0.875rem" }}>
                Remember me
              </label>
            </div>

            <div>
              <Link to="/forgot-password" style={{ color: "#2563eb", textDecoration: "underline", fontSize: "0.875rem" }}>
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{ width: "100%", opacity: isSubmitting ? 0.5 : 1 }}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </Form>

        <div style={{ 
          marginTop: "1.5rem", 
          paddingTop: "1.5rem", 
          borderTop: "1px solid #e5e7eb", 
          textAlign: "center" 
        }}>
          <p style={{ color: "#6b7280", marginBottom: "1rem" }}>New to Toolshed?</p>
          <Link
            to="/register"
            className="btn btn-secondary"
            style={{ width: "100%" }}
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}