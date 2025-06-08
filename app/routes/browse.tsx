import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useState, useMemo } from "react";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { Layout } from "~/components/Layout";
import { getItems } from "~/utils/db.server";
import type { Item } from "~/utils/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Browse Tools - Toolshed" },
    { name: "description", content: "Browse available tools and resources in your community" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { getCurrentUser } = await import("~/utils/session.server");
  
  try {
    const user = await getCurrentUser(request);
    const items = await getItems(50, 0); // Get first 50 items
    return json({ user, items });
  } catch (error) {
    console.error("Browse page loader error:", error);
    const user = await getCurrentUser(request);
    return json({ user, items: [] });
  }
}

export default function Browse() {
  const { user, items } = useLoaderData<typeof loader>();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "power-tools", name: "Power Tools" },
    { id: "hand-tools", name: "Hand Tools" },
    { id: "garden", name: "Garden & Outdoor" },
    { id: "automotive", name: "Automotive" },
    { id: "home", name: "Home & DIY" },
    { id: "specialty", name: "Specialty Tools" },
    { id: "tools", name: "Tools" },
  ];

  // Filter items based on search term and category
  const filteredItems = useMemo(() => {
    return items.filter((item: Item) => {
      const matchesSearch = !searchTerm || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || 
        item.category.toLowerCase() === selectedCategory.toLowerCase() ||
        item.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, selectedCategory]);

  return (
    <Layout user={user}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neighborhood-spruce mb-4">Browse Tools</h1>
        <p className="text-lg text-neighborhood-slate">
          Discover tools and resources available in your community
        </p>
      </div>

      {/* Search and Filters */}
      <div className="card p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-neighborhood-spruce mb-2">
              Search Tools
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-neighborhood-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                id="search"
                className="form-input pl-10"
                placeholder="Search for tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-neighborhood-spruce mb-2">
              Category
            </label>
            <select
              id="category"
              className="form-input"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredItems.length > 0 ? (
        <div>
          <div className="mb-6">
            <p className="text-sm text-neighborhood-slate">
              Showing {filteredItems.length} tool{filteredItems.length !== 1 ? 's' : ''}
              {searchTerm && ` matching "${searchTerm}"`}
              {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item: Item) => (
              <div key={item.id} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neighborhood-spruce mb-2">
                      <Link to={`/tool/${item.id}`} className="hover:text-neighborhood-mint">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-neighborhood-slate mb-2">{item.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-neighborhood-slate mb-4">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neighborhood-mint bg-opacity-10 text-neighborhood-mint">
                    {item.category}
                  </span>
                </div>
                
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-neighborhood-slate bg-opacity-10 text-neighborhood-slate">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neighborhood-slate">
                    <span className="font-medium">{item.quantityAvailable}</span> of <span className="font-medium">{item.quantityTotal}</span> available
                  </div>
                  <Link to={`/tool/${item.id}`} className="btn btn-sm btn-secondary">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-neighborhood-mint"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-neighborhood-spruce">
            {searchTerm || selectedCategory !== "all" ? "No tools found" : "No tools available"}
          </h3>
          <p className="mt-1 text-sm text-neighborhood-slate">
            {searchTerm || selectedCategory !== "all" 
              ? "Try adjusting your search or filters."
              : "Tools will appear here once they are shared by community members."
            }
          </p>
          <div className="mt-6">
            <Link to="/share" className="btn btn-primary">
              <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Share a Tool
            </Link>
          </div>
        </div>
      )}
      </div>
    </Layout>
  );
}
