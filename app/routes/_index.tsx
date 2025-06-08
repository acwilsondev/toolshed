import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <h1>Toolshed</h1>
            <div className="nav-links">
              <Link to="/login">Sign In</Link>
              <Link to="/register" className="btn btn-primary">Join</Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="container py-12">
        <header className="text-center mb-12">
          <h2 className="title">Welcome to Toolshed</h2>
          <p className="subtitle">
            Share tools, borrow equipment, and build stronger communities. 
            Connect with neighbors to share resources and reduce waste.
          </p>
        </header>

        <div className="grid-3 mb-12">
          <div className="card p-8">
            <h3>Share Your Tools</h3>
            <p>
              List tools you're willing to lend to neighbors. From power drills to garden equipment, help your community access what they need.
            </p>
            <Link to="/share">Start Sharing →</Link>
          </div>

          <div className="card p-8">
            <h3>Find What You Need</h3>
            <p>
              Browse available tools in your neighborhood. Save money and reduce waste by borrowing instead of buying.
            </p>
            <Link to="/browse">Browse Tools →</Link>
          </div>

          <div className="card p-8">
            <h3>Build Community</h3>
            <p>
              Connect with neighbors, build trust, and create a stronger, more sustainable community together.
            </p>
            <Link to="/login">Get Started →</Link>
          </div>
        </div>

        <div className="text-center cta">
          <h3>Ready to get started?</h3>
          <p>
            Join our community and start sharing resources with your neighbors today.
          </p>
          <div className="flex-center">
            <Link to="/register" className="btn btn-primary">Create Account</Link>
            <Link to="/login" className="btn btn-secondary">Sign In</Link>
          </div>
        </div>
      </main>
    </div>
  );
}