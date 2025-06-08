import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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

  // TODO: Fetch tool data from database when schema is integrated
  // For now, return placeholder response
  return json({ toolId });
}

export default function ToolDetail() {
  const { toolId } = useLoaderData<typeof loader>();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Tool not found state */}
        <div className="text-center py-12 px-6">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.386 0-4.735.832-6.565 2.436l-.693-.693A8.963 8.963 0 0112 13.5c2.213 0 4.337.815 5.985 2.29l-.692.692z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Tool not found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Tool with ID "{toolId}" could not be found. This feature will be available once the database schema is integrated.
          </p>
          <div className="mt-6">
            <a
              href="/browse"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Browse
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
