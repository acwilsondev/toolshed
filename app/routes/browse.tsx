import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Browse Tools - Toolshed" },
    { name: "description", content: "Browse available tools and resources in your community" },
  ];
};

export default function Browse() {
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
  ];

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem 2rem 1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2E5E4E', marginBottom: '1rem' }}>Browse Tools</h1>
        <p style={{ fontSize: '1.125rem', color: '#4A4A4A' }}>
          Discover tools and resources available in your community
        </p>
      </div>

      {/* Search and Filters */}
      <div style={{ 
        background: 'white', 
        borderRadius: '8px', 
        boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)', 
        border: '1px solid #A8D5BA', 
        padding: '1.5rem', 
        marginBottom: '2rem' 
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          <div>
            <label htmlFor="search" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#2E5E4E', marginBottom: '0.5rem' }}>
              Search Tools
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', paddingLeft: '0.75rem', height: '100%', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                <svg style={{ height: '1.25rem', width: '1.25rem', color: '#4A4A4A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                id="search"
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  paddingLeft: '2.5rem', 
                  paddingRight: '0.75rem', 
                  paddingTop: '0.5rem', 
                  paddingBottom: '0.5rem', 
                  border: '1px solid #A8D5BA', 
                  borderRadius: '6px', 
                  background: 'white'
                }}
                placeholder="Search for tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="category" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#2E5E4E', marginBottom: '0.5rem' }}>
              Category
            </label>
            <select
              id="category"
              style={{ 
                display: 'block', 
                width: '100%', 
                padding: '0.5rem 0.75rem', 
                border: '1px solid #A8D5BA', 
                borderRadius: '6px', 
                background: 'white',
                color: '#4A4A4A'
              }}
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

      {/* Empty State */}
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <svg
          style={{ margin: '0 auto', height: '3rem', width: '3rem', color: '#A8D5BA' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <h3 style={{ marginTop: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#2E5E4E' }}>No tools available</h3>
        <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: '#4A4A4A' }}>
          Tools will appear here once they are shared by community members.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <a
            href="/share"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              padding: '0.5rem 1rem', 
              fontSize: '0.875rem', 
              fontWeight: '500', 
              borderRadius: '6px', 
              color: 'white', 
              background: '#E0B34F', 
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.background = '#F3C86C'}
            onMouseOut={(e) => e.target.style.background = '#E0B34F'}
          >
            <svg style={{ marginLeft: '-0.25rem', marginRight: '0.5rem', height: '1.25rem', width: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Share a Tool
          </a>
        </div>
      </div>
    </div>
  );
}
