import { useState } from "react";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { json, redirect, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { authenticateUser } from "~/utils/db.server";

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

    // In a real app, you'd set a session cookie here
    // For now, redirect to profile with success
    return redirect(`/profile?welcome=true`);

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
    <div className="min-h-screen bg-neighborhood-cloud flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-bold text-neighborhood-slate">
            Sign in to Toolshed
          </h1>
          <p className="mt-2 text-center text-sm text-neighborhood-slate/70">
            Welcome back to your community
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <Form method="post" className="space-y-6">
            {actionData?.error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <p className="text-red-600 text-sm">{actionData.error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neighborhood-slate">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neighborhood-slate">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-neighborhood-goldenrod focus:ring-neighborhood-goldenrod border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-neighborhood-slate">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neighborhood-goldenrod hover:bg-neighborhood-goldenrod/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </Form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-neighborhood-slate/70">New to Toolshed?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/register"
                className="w-full flex justify-center py-2 px-4 border border-neighborhood-slate rounded-md shadow-sm text-sm font-medium text-neighborhood-slate bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod"
              >
                Create an account
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-neighborhood-slate/60">
              Demo account: alice@neighborhood.local / password123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}