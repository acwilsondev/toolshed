import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getItemById } from "~/utils/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Tool Details - Toolshed" },
    { name: "description", content: "View tool details and contact the owner" },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const toolId = params.id;
  
  if (!toolId) {
    throw new Response("Tool not found", { status: 404 });
  }

  const item = await getItemById(toolId);
  if (!item) {
    throw new Response("Tool not found", { status: 404 });
  }

  return json({ item });
}

export default function ToolDetail() {
  const { item } = useLoaderData<typeof loader>();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{item.title}</h1>
              <p className="mt-1 text-sm text-gray-500">{item.location}</p>
            </div>
            {item.photoPath && (
              <img
                src={item.photoPath}
                alt={item.title}
                className="h-32 w-32 object-cover rounded-lg"
              />
            )}
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">Description</h2>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">Details</h2>
            <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="mt-1 text-sm text-gray-900">{item.category}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Availability</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {item.quantityAvailable} of {item.quantityTotal} available
                </dd>
              </div>
              {item.tags && item.tags.length > 0 && (
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">Tags</dt>
                  <dd className="mt-1">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <a
              href="/browse"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Browse
            </a>
            {item.quantityAvailable > 0 && (
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Request to Borrow
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
