import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getReservations, getUsers, getItems } from "~/utils/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Reservation Management - Admin - Toolshed" },
    { name: "description", content: "Manage platform reservations and bookings" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const reservations = await getReservations(100, 0);
  const users = await getUsers(100, 0);
  const items = await getItems(100, 0);
  
  // Create maps for easier lookup
  const userMap = new Map(users.map(user => [user.id, user.name]));
  const itemMap = new Map(items.map(item => [item.id, item.title]));
  
  return json({ 
    reservations, 
    userMap: Object.fromEntries(userMap),
    itemMap: Object.fromEntries(itemMap)
  });
}

export default function AdminReservations() {
  const { reservations, userMap, itemMap } = useLoaderData<typeof loader>();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-blue-100 text-blue-800';
      case 'returned': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-neighborhood-cloud">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link 
              to="/admin" 
              className="text-neighborhood-spruce hover:text-neighborhood-spruce/80"
            >
              ← Back to Dashboard
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-neighborhood-slate mb-4">
            Reservation Management
          </h1>
          <p className="text-lg text-neighborhood-slate/80">
            Monitor and manage all platform reservations
          </p>
        </div>

        {/* Status Summary */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {['pending', 'approved', 'active', 'returned', 'cancelled'].map((status) => {
            const count = reservations.filter(r => r.status === status).length;
            return (
              <div key={status} className="bg-white rounded-lg shadow-md p-4 text-center">
                <p className="text-2xl font-bold text-neighborhood-spruce">{count}</p>
                <p className="text-sm text-neighborhood-slate/60 capitalize">{status}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-neighborhood-slate">
                All Reservations ({reservations.length})
              </h2>
              <div className="flex gap-2">
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce">
                  <option value="">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="active">Active</option>
                  <option value="returned">Returned</option>
                  <option value="cancelled">Cancelled</option>
                  <option value="rejected">Rejected</option>
                </select>
                <input 
                  type="search" 
                  placeholder="Search reservations..." 
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reservation ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Requester
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Owner
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dates
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reservations.map((reservation) => (
                  <tr key={reservation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        #{reservation.id.slice(-8)}
                      </div>
                      <div className="text-sm text-gray-500">
                        Qty: {reservation.quantity_requested}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {itemMap[reservation.item_id] || "Unknown Item"}
                      </div>
                      <div className="text-sm text-gray-500">
                        {reservation.item_id.slice(-8)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {userMap[reservation.requester_id] || "Unknown User"}
                      </div>
                      <div className="text-sm text-gray-500">
                        {reservation.requester_id.slice(-8)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {userMap[reservation.owner_id] || "Unknown User"}
                      </div>
                      <div className="text-sm text-gray-500">
                        {reservation.owner_id.slice(-8)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(reservation.status)}`}>
                        {reservation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>
                        {reservation.start_date 
                          ? new Date(reservation.start_date).toLocaleDateString()
                          : 'TBD'
                        }
                      </div>
                      <div>
                        to {reservation.end_date 
                          ? new Date(reservation.end_date).toLocaleDateString()
                          : 'TBD'
                        }
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link 
                        to={`/admin/reservations/${reservation.id}`}
                        className="text-neighborhood-spruce hover:text-neighborhood-spruce/80 mr-4"
                      >
                        View Details
                      </Link>
                      {reservation.status === 'pending' && (
                        <button className="text-neighborhood-goldenrod hover:text-neighborhood-goldenrod/80">
                          Moderate
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}