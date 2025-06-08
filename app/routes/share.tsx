import type { MetaFunction, ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useNavigation, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { Layout } from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Share a Tool - Toolshed" },
    { name: "description", content: "Share your tools and resources with the community" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { getCurrentUser } = await import("~/utils/session.server");
  const user = await getCurrentUser(request);
  return json({ user });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  
  // Basic form validation
  const title = formData.get("title");
  const description = formData.get("description");
  const category = formData.get("category");
  
  const errors: Record<string, string> = {};
  
  if (!title || typeof title !== "string" || title.trim().length === 0) {
    errors.title = "Tool name is required";
  }
  
  if (!description || typeof description !== "string" || description.trim().length === 0) {
    errors.description = "Description is required";
  }
  
  if (!category || typeof category !== "string" || category === "") {
    errors.category = "Category is required";
  }
  
  if (Object.keys(errors).length > 0) {
    return json({ errors, success: false }, { status: 400 });
  }
  
  // TODO: Save to database when schema is integrated
  console.log("Tool sharing data:", {
    title,
    description,
    category,
    condition: formData.get("condition"),
    availability: formData.get("availability"),
    location: formData.get("location"),
    contactMethod: formData.get("contactMethod"),
  });
  
  // For now, redirect to browse page
  return redirect("/browse?shared=true");
}

export default function Share() {
  const { user } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const isSubmitting = navigation.state === "submitting";

  const categories = [
    { id: "", name: "Select a category" },
    { id: "power-tools", name: "Power Tools" },
    { id: "hand-tools", name: "Hand Tools" },
    { id: "garden", name: "Garden & Outdoor" },
    { id: "automotive", name: "Automotive" },
    { id: "home", name: "Home & DIY" },
    { id: "specialty", name: "Specialty Tools" },
  ];

  const conditions = [
    { id: "excellent", name: "Excellent" },
    { id: "good", name: "Good" },
    { id: "fair", name: "Fair" },
    { id: "needs-repair", name: "Needs Repair" },
  ];

  const availabilityOptions = [
    { id: "available", name: "Available Now" },
    { id: "limited", name: "Limited Availability" },
    { id: "weekends", name: "Weekends Only" },
    { id: "by-appointment", name: "By Appointment" },
  ];

  return (
    <Layout user={user}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neighborhood-slate mb-4">Share a Tool</h1>
        <p className="text-lg text-neighborhood-slate">
          Add your tool to the community sharing network
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-neighborhood-mint/20 p-6">
        <Form method="post" className="space-y-6">
          {/* Tool Name */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-neighborhood-slate mb-2">
              Tool Name *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${
                actionData?.errors?.title
                  ? "border-neighborhood-rust focus:ring-neighborhood-rust focus:border-neighborhood-rust"
                  : "border-neighborhood-mint focus:ring-neighborhood-goldenrod focus:border-neighborhood-goldenrod"
              }`}
              placeholder="e.g., Power Drill, Lawnmower, Socket Set"
            />
            {actionData?.errors?.title && (
              <p className="mt-1 text-sm text-neighborhood-rust">{actionData.errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${
                actionData?.errors?.description
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              }`}
              placeholder="Describe the tool, its features, and any important details..."
            />
            {actionData?.errors?.description && (
              <p className="mt-1 text-sm text-red-600">{actionData.errors.description}</p>
            )}
          </div>

          {/* Category and Condition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${
                  actionData?.errors?.category
                    ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                }`}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {actionData?.errors?.category && (
                <p className="mt-1 text-sm text-red-600">{actionData.errors.category}</p>
              )}
            </div>

            <div>
              <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-2">
                Condition
              </label>
              <select
                id="condition"
                name="condition"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                {conditions.map((condition) => (
                  <option key={condition.id} value={condition.id}>
                    {condition.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Availability and Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <select
                id="availability"
                name="availability"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                {availabilityOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                General Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Downtown, West Side, ZIP code"
              />
            </div>
          </div>

          {/* Contact Method */}
          <div>
            <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Contact Method
            </label>
            <select
              id="contactMethod"
              name="contactMethod"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="message">App Message</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neighborhood-goldenrod hover:bg-neighborhood-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sharing Tool..." : "Share Tool"}
            </button>
          </div>
        </Form>
      </div>
      </div>
    </Layout>
  );
}
