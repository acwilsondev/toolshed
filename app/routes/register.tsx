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
    <div className="min-h-screen bg-neighborhood-cloud flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-bold text-neighborhood-slate">
            Join the Community
          </h1>
          <p className="mt-2 text-center text-sm text-neighborhood-slate/70">
            Start sharing tools with your neighbors
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
              <label htmlFor="name" className="block text-sm font-medium text-neighborhood-slate">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                placeholder="Enter your full name"
              />
            </div>

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
              <label htmlFor="neighborhood" className="block text-sm font-medium text-neighborhood-slate">
                Neighborhood
              </label>
              <input
                id="neighborhood"
                name="neighborhood"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                placeholder="e.g. Downtown, Riverside"
              />
            </div>

            <div>
              <label htmlFor="contactMethod" className="block text-sm font-medium text-neighborhood-slate">
                Preferred Contact Method
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
              >
                <option value="message">In-app messaging</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neighborhood-slate">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-neighborhood-slate">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                required
                className="h-4 w-4 text-neighborhood-goldenrod focus:ring-neighborhood-goldenrod border-gray-300 rounded"
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-neighborhood-slate">
                I agree to the{" "}
                <Link to="/terms" className="text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neighborhood-goldenrod hover:bg-neighborhood-goldenrod/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </div>
          </Form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-neighborhood-slate/70">Already have an account?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/login"
                className="w-full flex justify-center py-2 px-4 border border-neighborhood-slate rounded-md shadow-sm text-sm font-medium text-neighborhood-slate bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod"
              >
                Sign in instead
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}