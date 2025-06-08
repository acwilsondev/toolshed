import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getUsers, getItems, getReservations, getReservationEvents } from "~/utils/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin Dashboard - Toolshed" },
    { name: "description", content: "Admin interface for managing community resources" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const users = await getUsers(10, 0);
  const items = await getItems(10, 0);
  const reservations = await getReservations(10, 0);
  const recentEvents = await getReservationEvents(10, 0);

  const stats = {
    totalUsers: users.length,
    totalItems: items.length,
    totalReservations: reservations.length,
    activeReservations: reservations.filter(r => r.status === 'active').length,
    pendingReservations: reservations.filter(r => r.status === 'pending').length,
    availableItems: items.filter(i => i.quantity_available > 0).length,
  };

  return json({ users, items, reservations, recentEvents, stats });
}

export default function AdminDashboard() {
  const { users, items, reservations, recentEvents, stats } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-neighborhood-cloud">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neighborhood-slate mb-4">
            Admin Dashboard
          </h1>
          <p className="text-lg text-neighborhood-slate/80">
            Manage community resources and monitor platform activity
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-neighborhood-slate mb-2">Users</h3>
            <p className="text-3xl font-bold text-neighborhood-spruce">{stats.totalUsers}</p>
            <p className="text-sm text-neighborhood-slate/60">Total registered users</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-neighborhood-slate mb-2">Items</h3>
            <p className="text-3xl font-bold text-neighborhood-spruce">{stats.totalItems}</p>
            <p className="text-sm text-neighborhood-slate/60">{stats.availableItems} available now</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-neighborhood-slate mb-2">Reservations</h3>
            <p className="text-3xl font-bold text-neighborhood-spruce">{stats.totalReservations}</p>
            <p className="text-sm text-neighborhood-slate/60">{stats.activeReservations} active, {stats.pendingReservations} pending</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Users */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-neighborhood-slate">Recent Users</h2>
              <Link 
                to="/admin/users" 
                className="text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm"
              >
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {users.slice(0, 5).map((user) => (
                <div key={user.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-neighborhood-slate">{user.name}</p>
                    <p className="text-sm text-neighborhood-slate/60">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-neighborhood-slate/60">{user.neighborhood}</p>
                    <p className="text-xs text-neighborhood-slate/40">
                      {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-neighborhood-slate">Recent Items</h2>
              <Link 
                to="/admin/items" 
                className="text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm"
              >
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {items.slice(0, 5).map((item) => (
                <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-neighborhood-slate">{item.title}</p>
                    <p className="text-sm text-neighborhood-slate/60">{item.category}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm ${item.quantity_available > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.quantity_available > 0 ? 'Available' : 'Reserved'}
                    </p>
                    <p className="text-xs text-neighborhood-slate/40">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reservations */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-neighborhood-slate">Recent Reservations</h2>
              <Link 
                to="/admin/reservations" 
                className="text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm"
              >
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {reservations.slice(0, 5).map((reservation) => (
                <div key={reservation.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-neighborhood-slate">Reservation #{reservation.id.slice(-8)}</p>
                    <p className="text-sm text-neighborhood-slate/60">Item: {reservation.item_id.slice(-8)}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      reservation.status === 'active' ? 'bg-green-100 text-green-800' :
                      reservation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      reservation.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {reservation.status}
                    </span>
                    <p className="text-xs text-neighborhood-slate/40 mt-1">
                      {new Date(reservation.updated_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Events */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-neighborhood-slate">Recent Activity</h2>
              <Link 
                to="/admin/events" 
                className="text-neighborhood-spruce hover:text-neighborhood-spruce/80 text-sm"
              >
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {recentEvents.slice(0, 5).map((event) => (
                <div key={event.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-neighborhood-slate capitalize">
                      {event.event_type.replace('_', ' ')}
                    </p>
                    <p className="text-sm text-neighborhood-slate/60">
                      Reservation #{event.reservation_id.slice(-8)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-neighborhood-slate/40">
                      {new Date(event.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-neighborhood-slate mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link 
              to="/admin/users" 
              className="p-4 bg-neighborhood-spruce text-white rounded-lg hover:bg-neighborhood-spruce/90 transition-colors text-center"
            >
              Manage Users
            </Link>
            <Link 
              to="/admin/items" 
              className="p-4 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors text-center"
            >
              Manage Items
            </Link>
            <Link 
              to="/admin/reservations" 
              className="p-4 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/90 transition-colors text-center"
            >
              View Reservations
            </Link>
            <Link 
              to="/admin/events" 
              className="p-4 bg-neighborhood-rust text-white rounded-lg hover:bg-neighborhood-rust/90 transition-colors text-center"
            >
              Activity Log
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}