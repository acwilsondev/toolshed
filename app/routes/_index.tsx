import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-neighborhood-cloud">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-neighborhood-slate mb-6">
            Toolshed API Implementation
          </h1>
          <p className="text-xl text-neighborhood-slate/80 max-w-2xl mx-auto">
            Complete API system with three interfaces: User, Admin, and Developer JSON API
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-neighborhood-spruce mb-4">User Interface</h2>
            <p className="text-neighborhood-slate/70 mb-6">
              Browse and share items with your community
            </p>
            <Link 
              to="/browse" 
              className="block w-full px-4 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors"
            >
              Browse Items
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-neighborhood-spruce mb-4">Admin Dashboard</h2>
            <p className="text-neighborhood-slate/70 mb-6">
              Data review and management tools
            </p>
            <Link 
              to="/admin" 
              className="block w-full px-4 py-2 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/90 transition-colors"
            >
              Admin Panel
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-neighborhood-spruce mb-4">JSON API</h2>
            <p className="text-neighborhood-slate/70 mb-6">
              RESTful endpoints for developers
            </p>
            <Link 
              to="/api-docs" 
              className="block w-full px-4 py-2 bg-neighborhood-rust text-white rounded-lg hover:bg-neighborhood-rust/90 transition-colors"
            >
              API Documentation
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-neighborhood-slate mb-6 text-center">
            Implementation Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-neighborhood-spruce mb-2">Event-Sourced Reservations</h4>
              <p className="text-neighborhood-slate/70">Complete audit trail with state computation from events</p>
            </div>
            <div>
              <h4 className="font-semibold text-neighborhood-spruce mb-2">Authentication System</h4>
              <p className="text-neighborhood-slate/70">JWT-based authentication with security handling</p>
            </div>
            <div>
              <h4 className="font-semibold text-neighborhood-spruce mb-2">Real-Time Data</h4>
              <p className="text-neighborhood-slate/70">All interfaces share the same underlying data</p>
            </div>
            <div>
              <h4 className="font-semibold text-neighborhood-spruce mb-2">Business Logic</h4>
              <p className="text-neighborhood-slate/70">Complete validation for community sharing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}