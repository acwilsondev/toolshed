import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getItems, getUsers } from "~/utils/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Item Management - Admin - Toolshed" },
    { name: "description", content: "Manage platform items and tools" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const items = await getItems(100, 0);
  const users = await getUsers(100, 0);
  
  // Create a map of user IDs to user names for display
  const userMap = new Map(users.map(user => [user.id, user.name]));
  
  return json({ items, userMap: Object.fromEntries(userMap) });
}

export default function AdminItems() {
  const { items, userMap } = useLoaderData<typeof loader>();

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
            Item Management
          </h1>
          <p className="text-lg text-neighborhood-slate/80">
            Review and manage all shared items and tools
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-neighborhood-slate">
                All Items ({items.length})
              </h2>
              <div className="flex gap-2">
                <input 
                  type="search" 
                  placeholder="Search items..." 
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce focus:border-transparent"
                />
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neighborhood-spruce">
                  <option value="">All Categories</option>
                  <option value="power-tools">Power Tools</option>
                  <option value="hand-tools">Hand Tools</option>
                  <option value="garden">Garden</option>
                  <option value="automotive">Automotive</option>
                  <option value="home">Home</option>
                  <option value="specialty">Specialty</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Owner
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Availability
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500 max-w-xs truncate">
                          {item.description || "No description"}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {userMap[item.owner_id] || "Unknown User"}
                      </div>
                      <div className="text-sm text-gray-500">
                        ID: {item.owner_id.slice(-8)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-neighborhood-goldenrod text-white">
                        {item.category.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.quantity_available > 0 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {item.quantity_available > 0 ? `${item.quantity_available} available` : 'Reserved'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link 
                        to={`/admin/items/${item.id}`}
                        className="text-neighborhood-spruce hover:text-neighborhood-spruce/80 mr-4"
                      >
                        View Details
                      </Link>
                      <button className="text-neighborhood-rust hover:text-neighborhood-rust/80">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tags Cloud */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-neighborhood-slate mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(items.flatMap(item => item.tags))).slice(0, 20).map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-neighborhood-mint/20 text-neighborhood-slate text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}