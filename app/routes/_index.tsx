import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <nav className="nav py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-neighborhood-spruce">Toolshed</h1>
            <div className="flex gap-4 items-center">
              <Link to="/login" className="text-neighborhood-slate hover:text-neighborhood-spruce">Sign In</Link>
              <Link to="/register" className="btn btn-primary">Join</Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <Link to="/login" className="text-neighborhood-goldenrod hover:text-neighborhood-hover font-medium">Get Started →</Link>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-neighborhood-mint/20 to-neighborhood-cloud border border-neighborhood-mint/20 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-neighborhood-spruce mb-4">Ready to get started?</h3>
          <p className="text-neighborhood-slate mb-6 max-w-md mx-auto">
            Join our community and start sharing resources with your neighbors today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/register" className="btn btn-primary">Create Account</Link>
            <Link to="/login" className="btn btn-secondary">Sign In</Link>
          </div>
        </div>
      </main>
    </div>
  );
}