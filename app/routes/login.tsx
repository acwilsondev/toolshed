import { json, redirect, type ActionFunctionArgs, type MetaFunction, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation, useLoaderData } from "@remix-run/react";
import { authenticateUser } from "~/utils/db.server";
import { Layout } from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [{ title: "Sign In - Toolshed" }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { getCurrentUser } = await import("~/utils/session.server");
  const user = await getCurrentUser(request);
  return json({ user });
}

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

    // Simple session-based authentication
    return redirect("/profile", {
      headers: {
        "Set-Cookie": `user_session=${user.id}; HttpOnly; Path=/; Max-Age=${7 * 24 * 60 * 60}; SameSite=Strict`
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

export default function Login() {
  const { user } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Layout user={user}>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="card w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neighborhood-spruce mb-2">
            Sign in to Toolshed
          </h1>
          <p className="text-neighborhood-slate">
            Welcome back to your community
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
    </Layout>
  );
}
