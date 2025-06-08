import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "API Documentation - Toolshed" },
    { name: "description", content: "Complete API documentation for developers" },
  ];
};

export default function ApiDocs() {
  const [selectedSection, setSelectedSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Overview" },
    { id: "authentication", title: "Authentication" },
    { id: "users", title: "Users" },
    { id: "items", title: "Items" },
    { id: "reservations", title: "Reservations" },
    { id: "events", title: "Event Sourcing" },
  ];

  return (
    <div className="min-h-screen bg-neighborhood-cloud">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neighborhood-slate mb-4">
            API Documentation
          </h1>
          <p className="text-lg text-neighborhood-slate/80">
            Complete developer reference for the Toolshed API
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 bg-white rounded-lg shadow-md p-6">
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedSection === section.id
                      ? 'bg-neighborhood-spruce text-white'
                      : 'text-neighborhood-slate hover:bg-gray-100'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-8">
            {selectedSection === "overview" && (
              <div>
                <h2 className="text-2xl font-bold text-neighborhood-slate mb-4">API Overview</h2>
                <div className="prose max-w-none">
                  <p className="text-neighborhood-slate/80 mb-6">
                    The Toolshed API provides three different ways to interact with the platform:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-neighborhood-spruce mb-2">
                        1. User Interface
                      </h3>
                      <p className="text-sm text-neighborhood-slate/70">
                        Web-based interface for community members to browse, share, and request items.
                      </p>
                      <div className="mt-3">
                        <span className="text-xs bg-neighborhood-mint px-2 py-1 rounded">
                          /browse, /share, /profile
                        </span>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-neighborhood-goldenrod mb-2">
                        2. Admin Dashboard
                      </h3>
                      <p className="text-sm text-neighborhood-slate/70">
                        Administrative interface for reviewing data, managing users, and monitoring activity.
                      </p>
                      <div className="mt-3">
                        <span className="text-xs bg-neighborhood-goldenrod text-white px-2 py-1 rounded">
                          /admin/*
                        </span>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-neighborhood-rust mb-2">
                        3. JSON API
                      </h3>
                      <p className="text-sm text-neighborhood-slate/70">
                        RESTful API endpoints for developers to integrate with external applications.
                      </p>
                      <div className="mt-3">
                        <span className="text-xs bg-neighborhood-rust text-white px-2 py-1 rounded">
                          /api/*
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-neighborhood-slate mb-3">Event-Sourced Architecture</h3>
                  <p className="text-neighborhood-slate/80 mb-4">
                    The reservation system uses event sourcing where the current state is computed from an immutable log of events. 
                    This provides complete audit trails and enables complex business logic with full history tracking.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Base URL</h4>
                    <code className="text-sm bg-gray-200 px-2 py-1 rounded">
                      https://your-domain.com/api
                    </code>
                  </div>
                </div>
              </div>
            )}

            {selectedSection === "authentication" && (
              <div>
                <h2 className="text-2xl font-bold text-neighborhood-slate mb-4">Authentication</h2>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Login</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">
                        POST
                      </span>
                      <code>/api/auth/login</code>
                    </div>
                    <p className="text-sm text-neighborhood-slate/70 mb-3">
                      Authenticate with email and password to receive a JWT token.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Request Body:</h4>
                      <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{JSON.stringify({
  email: "alice@neighborhood.local",
  password: "your_password"
}, null, 2)}
                      </pre>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Response:</h4>
                      <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{JSON.stringify({
  token: "mock-jwt-token-550e8400-e29b-41d4-a716-446655440001"
}, null, 2)}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Using the Token</h3>
                  <p className="text-neighborhood-slate/80 mb-3">
                    Include the JWT token in the Authorization header for all API requests:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-sm">
                      Authorization: Bearer your-jwt-token-here
                    </code>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Development Note</h4>
                  <p className="text-yellow-700 text-sm">
                    This implementation uses mock JWT tokens for demonstration. In production, 
                    implement proper JWT signing, validation, and expiration handling.
                  </p>
                </div>
              </div>
            )}

            {selectedSection === "items" && (
              <div>
                <h2 className="text-2xl font-bold text-neighborhood-slate mb-4">Items API</h2>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">
                        GET
                      </span>
                      <code>/api/items</code>
                    </div>
                    <p className="text-neighborhood-slate/70 mb-3">Get all items with optional pagination.</p>
                    
                    <h4 className="font-semibold mb-2">Query Parameters:</h4>
                    <ul className="text-sm text-neighborhood-slate/70 mb-3 space-y-1">
                      <li><code>limit</code> - Maximum number of items (default: 50)</li>
                      <li><code>offset</code> - Number of items to skip (default: 0)</li>
                    </ul>
                    
                    <h4 className="font-semibold mb-2">Example Response:</h4>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{JSON.stringify([
  {
    id: "650e8400-e29b-41d4-a716-446655440001",
    owner_id: "550e8400-e29b-41d4-a716-446655440001",
    title: "Electric Drill",
    description: "High-quality cordless drill with multiple bits",
    category: "power-tools",
    tags: ["drilling", "construction", "DIY"],
    location: "Downtown",
    photo_path: null,
    quantity_total: 1,
    quantity_available: 1,
    created_at: "2024-01-15T00:00:00.000Z"
  }
], null, 2)}
                    </pre>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">
                        POST
                      </span>
                      <code>/api/items</code>
                    </div>
                    <p className="text-neighborhood-slate/70 mb-3">Create a new item.</p>
                    
                    <h4 className="font-semibold mb-2">Request Body:</h4>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{JSON.stringify({
  owner_id: "550e8400-e29b-41d4-a716-446655440001",
  title: "Circular Saw",
  description: "Professional grade circular saw with laser guide",
  category: "power-tools",
  tags: ["cutting", "woodworking", "construction"],
  location: "Downtown",
  quantity_total: 1
}, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {selectedSection === "reservations" && (
              <div>
                <h2 className="text-2xl font-bold text-neighborhood-slate mb-4">Reservations API</h2>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">
                        GET
                      </span>
                      <code>/api/reservations</code>
                    </div>
                    <p className="text-neighborhood-slate/70 mb-3">Get current reservation states with filtering options.</p>
                    
                    <h4 className="font-semibold mb-2">Query Parameters:</h4>
                    <ul className="text-sm text-neighborhood-slate/70 mb-3 space-y-1">
                      <li><code>item_id</code> - Filter by item ID</li>
                      <li><code>requester_id</code> - Filter by requester ID</li>
                      <li><code>status</code> - Filter by status (pending, approved, active, returned, cancelled)</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">
                        GET
                      </span>
                      <code>/api/reservations/[id]</code>
                    </div>
                    <p className="text-neighborhood-slate/70 mb-3">Get a specific reservation's current state.</p>
                  </div>
                </div>
              </div>
            )}

            {selectedSection === "events" && (
              <div>
                <h2 className="text-2xl font-bold text-neighborhood-slate mb-4">Event Sourcing</h2>
                
                <div className="mb-6">
                  <p className="text-neighborhood-slate/80 mb-4">
                    The reservation system uses event sourcing where each reservation's state is computed 
                    from an immutable log of events. This provides complete audit trails and enables 
                    complex business logic.
                  </p>

                  <h3 className="text-lg font-semibold mb-3">Event Types</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left">Event Type</th>
                          <th className="px-4 py-2 text-left">Description</th>
                          <th className="px-4 py-2 text-left">Valid From States</th>
                          <th className="px-4 py-2 text-left">Resulting State</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-2 font-mono text-sm">requested</td>
                          <td className="px-4 py-2">Initial reservation request</td>
                          <td className="px-4 py-2">-</td>
                          <td className="px-4 py-2">pending</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-mono text-sm">approved</td>
                          <td className="px-4 py-2">Owner approves reservation</td>
                          <td className="px-4 py-2">pending</td>
                          <td className="px-4 py-2">approved</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-mono text-sm">activated</td>
                          <td className="px-4 py-2">Item picked up by requester</td>
                          <td className="px-4 py-2">approved</td>
                          <td className="px-4 py-2">active</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-mono text-sm">returned</td>
                          <td className="px-4 py-2">Item returned by requester</td>
                          <td className="px-4 py-2">active</td>
                          <td className="px-4 py-2">returned</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">
                      POST
                    </span>
                    <code>/api/reservations/events</code>
                  </div>
                  <p className="text-neighborhood-slate/70 mb-3">Add a new event to the reservation log.</p>
                  
                  <h4 className="font-semibold mb-2">Example: Create New Reservation</h4>
                  <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{JSON.stringify({
  item_id: "650e8400-e29b-41d4-a716-446655440001",
  event_type: "requested",
  quantity: 1,
  start_date: "2024-06-10T09:00:00Z",
  end_date: "2024-06-12T17:00:00Z",
  notes: "Need for home renovation project"
}, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-neighborhood-slate mb-4">API Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Authentication</h3>
              <p className="text-xs text-neighborhood-slate/70">
                POST /api/auth/login with email and password to get JWT token
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Get Items</h3>
              <p className="text-xs text-neighborhood-slate/70">
                GET /api/items with Authorization header to retrieve all items
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Create Reservation</h3>
              <p className="text-xs text-neighborhood-slate/70">
                POST /api/reservations/events to create new reservation events
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}