import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
        <header style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "3rem", color: "#2d3748", marginBottom: "1rem" }}>
            Welcome to Toolshed
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#4a5568", maxWidth: "600px", margin: "0 auto" }}>
            Share tools, borrow equipment, and build stronger communities. 
            Connect with neighbors to share resources and reduce waste.
          </p>
        </header>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "3rem" }}>
          <Link 
            to="/browse" 
            style={{
              backgroundColor: "#f6ad55",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: "600"
            }}
          >
            Browse Tools
          </Link>
          <Link 
            to="/register"
            style={{
              backgroundColor: "#4fd1c7",
              color: "#2d3748",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: "600"
            }}
          >
            Join Community
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#2d3748", marginBottom: "1rem" }}>
              Share Your Tools
            </h3>
            <p style={{ color: "#4a5568", marginBottom: "1rem" }}>
              List tools you're willing to lend to neighbors. From power drills to garden equipment, help your community access what they need.
            </p>
            <Link to="/share" style={{ color: "#f6ad55", textDecoration: "none", fontWeight: "600" }}>
              Start Sharing →
            </Link>
          </div>

          <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#2d3748", marginBottom: "1rem" }}>
              Find What You Need
            </h3>
            <p style={{ color: "#4a5568", marginBottom: "1rem" }}>
              Browse available tools in your neighborhood. Save money and reduce waste by borrowing instead of buying.
            </p>
            <Link to="/browse" style={{ color: "#f6ad55", textDecoration: "none", fontWeight: "600" }}>
              Browse Tools →
            </Link>
          </div>

          <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#2d3748", marginBottom: "1rem" }}>
              Build Community
            </h3>
            <p style={{ color: "#4a5568", marginBottom: "1rem" }}>
              Connect with neighbors, build trust, and create a stronger, more sustainable community together.
            </p>
            <Link to="/login" style={{ color: "#f6ad55", textDecoration: "none", fontWeight: "600" }}>
              Get Started →
            </Link>
          </div>
        </div>

        <div style={{ textAlign: "center", backgroundColor: "#f7fafc", padding: "2rem", borderRadius: "0.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", color: "#2d3748", marginBottom: "1rem" }}>
            Ready to get started?
          </h2>
          <p style={{ color: "#4a5568", marginBottom: "1.5rem" }}>
            Join our community and start sharing resources with your neighbors today.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link 
              to="/register"
              style={{
                backgroundColor: "#f6ad55",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
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
                color: "#2d3748",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                fontWeight: "600",
                border: "1px solid #e2e8f0"
              }}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}