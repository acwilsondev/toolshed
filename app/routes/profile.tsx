import { useState } from "react";
import { Form, Link, useLoaderData, useActionData, useNavigation, useSearchParams } from "@remix-run/react";
import { json, type LoaderFunctionArgs, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { getUserByEmail, updateUser, getItems } from "~/utils/db.server";
import { Layout } from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [{ title: "Profile - Toolshed" }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { getCurrentUser, requireUser } = await import("~/utils/session.server");
  
  const user = await getCurrentUser(request);
  requireUser(user);
  
  if (!user) {
    throw new Response("User not found", { status: 404 });
  }

  // Get user's items
  const allItems = await getItems();
  const userItems = allItems.filter(item => item.ownerId === user.id);

  return json({ user, userItems });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "updateProfile") {
    const name = formData.get("name")?.toString();
    const neighborhood = formData.get("neighborhood")?.toString();
    const contactMethod = formData.get("contactMethod")?.toString();

    if (!name) {
      return json({ error: "Name is required" }, { status: 400 });
    }

    try {
      const { getCurrentUser, requireUser } = await import("~/utils/session.server");
      const user = await getCurrentUser(request);
      requireUser(user);
      
      if (!user) {
        return json({ error: "User not found" }, { status: 404 });
      }

      await updateUser(user.id, {
        name,
        neighborhood: neighborhood || '',
        contact_method: contactMethod || 'message'
      });

      return json({ success: "Profile updated successfully" });
    } catch (error) {
      console.error("Profile update error:", error);
      return json({ error: "Failed to update profile" }, { status: 500 });
    }
  }

  return json({ error: "Invalid action" }, { status: 400 });
}

export default function Profile() {
  const { user, userItems } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const [isEditing, setIsEditing] = useState(false);
  
  const isUpdating = navigation.state === "submitting" && navigation.formData?.get("intent") === "updateProfile";
  const isWelcome = searchParams.get("welcome") === "true";
  const isNewUser = searchParams.get("new") === "true";

  return (
    <Layout user={user}>
      <div className="min-h-screen bg-neighborhood-cloud">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Message */}
        {isWelcome && (
          <div className="mb-8 bg-neighborhood-mint/10 border border-neighborhood-mint/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-neighborhood-slate mb-2">
              {isNewUser ? "Welcome to Toolshed!" : "Welcome back!"}
            </h2>
            <p className="text-neighborhood-slate/70">
              {isNewUser 
                ? "Your account has been created successfully. Start by browsing available tools or sharing your own."
                : "You're successfully signed in. Explore your neighborhood's shared resources."
              }
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-neighborhood-slate">My Profile</h1>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-4 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors"
                >
                  {isEditing ? "Cancel" : "Edit Profile"}
                </button>
              </div>

              {actionData?.success && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-md p-4">
                  <p className="text-green-600 text-sm">{actionData.success}</p>
                </div>
              )}

              {actionData?.error && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
                  <p className="text-red-600 text-sm">{actionData.error}</p>
                </div>
              )}

              {isEditing ? (
                <Form method="post" className="space-y-6">
                  <input type="hidden" name="intent" value="updateProfile" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neighborhood-slate">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      defaultValue={user.name}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neighborhood-slate">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={user.email}
                      disabled
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
                    />
                    <p className="text-xs text-neighborhood-slate/60 mt-1">Email cannot be changed</p>
                  </div>

                  <div>
                    <label htmlFor="neighborhood" className="block text-sm font-medium text-neighborhood-slate">
                      Neighborhood
                    </label>
                    <input
                      id="neighborhood"
                      name="neighborhood"
                      type="text"
                      defaultValue={user.neighborhood}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMethod" className="block text-sm font-medium text-neighborhood-slate">
                      Preferred Contact Method
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      defaultValue={user.contactMethod}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
                    >
                      <option value="message">In-app messaging</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={isUpdating}
                      className="px-6 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors disabled:opacity-50"
                    >
                      {isUpdating ? "Saving..." : "Save Changes"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-2 bg-gray-200 text-neighborhood-slate rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-neighborhood-slate/70">Name</h3>
                    <p className="text-lg text-neighborhood-slate">{user.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-neighborhood-slate/70">Email</h3>
                    <p className="text-lg text-neighborhood-slate">{user.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-neighborhood-slate/70">Neighborhood</h3>
                    <p className="text-lg text-neighborhood-slate">{user.neighborhood || "Not specified"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-neighborhood-slate/70">Contact Preference</h3>
                    <p className="text-lg text-neighborhood-slate capitalize">{user.contactMethod}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-neighborhood-slate/70">Member Since</h3>
                    <p className="text-lg text-neighborhood-slate">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* My Items */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-neighborhood-slate">My Shared Items</h2>
                <Link
                  to="/share"
                  className="px-4 py-2 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/80 transition-colors"
                >
                  Add New Item
                </Link>
              </div>

              {userItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userItems.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-neighborhood-slate">{item.title}</h3>
                      <p className="text-sm text-neighborhood-slate/70 mt-1">{item.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs bg-neighborhood-mint/20 text-neighborhood-slate px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <span className="text-xs text-neighborhood-slate/60">
                          Available: {item.quantityAvailable}/{item.quantityTotal}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-neighborhood-slate/70 mb-4">You haven't shared any items yet.</p>
                  <Link
                    to="/share"
                    className="inline-flex items-center px-4 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors"
                  >
                    Share Your First Item
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-neighborhood-slate mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/browse"
                  className="block w-full px-4 py-3 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors text-center"
                >
                  Browse Items
                </Link>
                <Link
                  to="/share"
                  className="block w-full px-4 py-3 bg-neighborhood-mint text-neighborhood-slate rounded-lg hover:bg-neighborhood-mint/80 transition-colors text-center"
                >
                  Share an Item
                </Link>
                <Link
                  to="/reservations"
                  className="block w-full px-4 py-3 bg-white border border-neighborhood-slate text-neighborhood-slate rounded-lg hover:bg-gray-50 transition-colors text-center"
                >
                  My Reservations
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-neighborhood-slate mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neighborhood-slate/70">Items Shared</span>
                  <span className="font-semibold text-neighborhood-slate">{userItems.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neighborhood-slate/70">Trust Score</span>
                  <span className="font-semibold text-neighborhood-goldenrod">★★★★☆</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neighborhood-slate/70">Exchanges</span>
                  <span className="font-semibold text-neighborhood-slate">12</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-neighborhood-slate mb-4">Account</h3>
              <div className="space-y-3">
                <button className="block w-full px-4 py-2 text-left text-neighborhood-slate hover:bg-gray-50 rounded">
                  Notification Settings
                </button>
                <button className="block w-full px-4 py-2 text-left text-neighborhood-slate hover:bg-gray-50 rounded">
                  Privacy Settings
                </button>
                <Link
                  to="/logout"
                  className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded"
                >
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}
