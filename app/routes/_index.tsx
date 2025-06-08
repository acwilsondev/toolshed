import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6" }}>
      <nav style={{ backgroundColor: "#fff", borderBottom: "1px solid #e0e0e0", padding: "1rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>Toolshed</h1>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="/login" style={{ color: "#666", textDecoration: "none" }}>Sign In</Link>
            <Link to="/register" style={{ backgroundColor: "#007bff", color: "white", padding: "0.5rem 1rem", borderRadius: "4px", textDecoration: "none" }}>Join</Link>
          </div>
        </div>
      </nav>
      
      <main style={{ padding: "3rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "1rem" }}>
            Welcome to Toolshed
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
            Share tools, borrow equipment, and build stronger communities. 
            Connect with neighbors to share resources and reduce waste.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          <div style={{ backgroundColor: "#f8f9fa", padding: "2rem", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#333", marginBottom: "1rem" }}>
              Share Your Tools
            </h3>
            <p style={{ color: "#666", marginBottom: "1rem" }}>
              List tools you're willing to lend to neighbors. From power drills to garden equipment, help your community access what they need.
            </p>
            <Link to="/share" style={{ color: "#007bff", textDecoration: "none", fontWeight: "600" }}>
              Start Sharing →
            </Link>
          </div>

          <div style={{ backgroundColor: "#f8f9fa", padding: "2rem", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#333", marginBottom: "1rem" }}>
              Find What You Need
            </h3>
            <p style={{ color: "#666", marginBottom: "1rem" }}>
              Browse available tools in your neighborhood. Save money and reduce waste by borrowing instead of buying.
            </p>
            <Link to="/browse" style={{ color: "#007bff", textDecoration: "none", fontWeight: "600" }}>
              Browse Tools →
            </Link>
          </div>

          <div style={{ backgroundColor: "#f8f9fa", padding: "2rem", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#333", marginBottom: "1rem" }}>
              Build Community
            </h3>
            <p style={{ color: "#666", marginBottom: "1rem" }}>
              Connect with neighbors, build trust, and create a stronger, more sustainable community together.
            </p>
            <Link to="/login" style={{ color: "#007bff", textDecoration: "none", fontWeight: "600" }}>
              Get Started →
            </Link>
          </div>
        </div>

        <div style={{ textAlign: "center", backgroundColor: "#f0f8ff", padding: "2rem", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "1rem" }}>
            Ready to get started?
          </h3>
          <p style={{ color: "#666", marginBottom: "1.5rem" }}>
            Join our community and start sharing resources with your neighbors today.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link 
              to="/register"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "600"
              }}
            >
              Create Account
            </Link>
            <Link 
              to="/login"
              style={{
                backgroundColor: "white",
                color: "#333",
                padding: "0.75rem 1.5rem",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "600",
                border: "1px solid #ddd"
              }}
            >
              Sign In
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}