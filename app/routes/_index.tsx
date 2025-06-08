import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Toolshed - Community Resource Sharing" },
    { name: "description", content: "Share tools and resources in your community" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-neighborhood-cloud">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-neighborhood-slate mb-6">
              Welcome to Toolshed
            </h1>
            <p className="text-xl text-neighborhood-slate/80 max-w-3xl mx-auto mb-8">
              Share tools, borrow equipment, and build stronger communities. 
              Connect with neighbors to share resources and reduce waste.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/browse" 
                className="px-8 py-3 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors font-semibold"
              >
                Browse Available Items
              </Link>
              <Link 
                to="/login" 
                className="px-8 py-3 bg-white text-neighborhood-slate border-2 border-neighborhood-slate rounded-lg hover:bg-neighborhood-slate hover:text-white transition-colors font-semibold"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-neighborhood-slate text-center mb-12">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-neighborhood-mint rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-neighborhood-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neighborhood-spruce mb-4">Discover</h3>
            <p className="text-neighborhood-slate/70">
              Browse tools and equipment available in your neighborhood. 
              From power tools to kitchen appliances.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-neighborhood-goldenrod rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neighborhood-spruce mb-4">Request</h3>
            <p className="text-neighborhood-slate/70">
              Send a request to borrow items you need. 
              Connect directly with your neighbors through secure messaging.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-neighborhood-rust rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neighborhood-spruce mb-4">Share</h3>
            <p className="text-neighborhood-slate/70">
              List your own tools and help others in your community. 
              Build relationships and earn trust through sharing.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-neighborhood-goldenrod mb-2">500+</h3>
              <p className="text-neighborhood-slate/70">Tools Shared</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-neighborhood-mint mb-2">200+</h3>
              <p className="text-neighborhood-slate/70">Community Members</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-neighborhood-rust mb-2">1000+</h3>
              <p className="text-neighborhood-slate/70">Successful Exchanges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-neighborhood-slate mb-6">
          Ready to Start Sharing?
        </h2>
        <p className="text-xl text-neighborhood-slate/80 mb-8 max-w-2xl mx-auto">
          Join your neighborhood community today and discover the power of sharing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/register" 
            className="px-8 py-3 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors font-semibold"
          >
            Join Community
          </Link>
          <Link 
            to="/api-docs" 
            className="px-8 py-3 bg-white text-neighborhood-slate border-2 border-neighborhood-slate rounded-lg hover:bg-neighborhood-slate hover:text-white transition-colors font-semibold"
          >
            Developer API
          </Link>
        </div>
      </div>
    </div>
  );
}