import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Layout } from "~/components/Layout";

export async function loader({ request }: LoaderFunctionArgs) {
  const { getCurrentUser } = await import("~/utils/session.server");
  const user = await getCurrentUser(request);
  return json({ user });
}

export default function Index() {
  const { user } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const isLoggedOut = searchParams.get("logout") === "true";
  
  return (
    <Layout user={user}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logout confirmation message */}
        {isLoggedOut && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <p className="text-green-600 font-medium">You've been successfully signed out. Thanks for using Toolshed!</p>
          </div>
        )}
        
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neighborhood-spruce mb-4">Welcome to Toolshed</h2>
          <p className="text-xl text-neighborhood-slate max-w-2xl mx-auto">
            Share tools, borrow equipment, and build stronger communities. 
            Connect with neighbors to share resources and reduce waste.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card p-8">
            <h3 className="text-lg font-semibold text-neighborhood-spruce mb-4">Share Your Tools</h3>
            <p className="text-neighborhood-slate mb-4">
              List tools you're willing to lend to neighbors. From power drills to garden equipment, help your community access what they need.
            </p>
            <Link to="/share" className="text-neighborhood-goldenrod hover:text-neighborhood-hover font-medium">Start Sharing →</Link>
          </div>

          <div className="card p-8">
            <h3 className="text-lg font-semibold text-neighborhood-spruce mb-4">Find What You Need</h3>
            <p className="text-neighborhood-slate mb-4">
              Browse available tools in your neighborhood. Save money and reduce waste by borrowing instead of buying.
            </p>
            <Link to="/browse" className="text-neighborhood-goldenrod hover:text-neighborhood-hover font-medium">Browse Tools →</Link>
          </div>

          <div className="card p-8">
            <h3 className="text-lg font-semibold text-neighborhood-spruce mb-4">Build Community</h3>
            <p className="text-neighborhood-slate mb-4">
              Connect with neighbors, build trust, and create a stronger, more sustainable community together.
            </p>
            <Link to={user ? "/profile" : "/login"} className="text-neighborhood-goldenrod hover:text-neighborhood-hover font-medium">
              {user ? "My Profile" : "Get Started"} →
            </Link>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-neighborhood-mint/20 to-neighborhood-cloud border border-neighborhood-mint/20 rounded-xl p-8">
          {user ? (
            <>
              <h3 className="text-2xl font-semibold text-neighborhood-spruce mb-4">Welcome back, {user.name}!</h3>
              <p className="text-neighborhood-slate mb-6 max-w-md mx-auto">
                Ready to share or borrow tools with your neighbors?
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/share" className="btn btn-primary">Share an Item</Link>
                <Link to="/browse" className="btn btn-secondary">Browse Tools</Link>
                <Link to="/profile" className="btn btn-secondary">My Profile</Link>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-semibold text-neighborhood-spruce mb-4">Ready to get started?</h3>
              <p className="text-neighborhood-slate mb-6 max-w-md mx-auto">
                Join our community and start sharing resources with your neighbors today.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/register" className="btn btn-primary">Create Account</Link>
                <Link to="/login" className="btn btn-secondary">Sign In</Link>
              </div>
            </>
          )}
        </div>
      </main>
    </Layout>
  );
}