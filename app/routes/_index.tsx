import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Toolshed - Share Tools & Resources" },
    { name: "description", content: "Connect with your community to share tools, equipment, and resources" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-neighborhood-slate dark:text-neighborhood-dark-slate sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Share tools with</span>{' '}
                  <span className="block text-neighborhood-spruce dark:text-neighborhood-dark-spruce xl:inline">your community</span>
                </h1>
                <p className="mt-3 text-base text-neighborhood-slate dark:text-neighborhood-dark-slate sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Toolshed connects neighbors to share tools, equipment, and resources. 
                  Reduce waste, save money, and build stronger communities.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/browse"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-neighborhood-goldenrod dark:bg-neighborhood-dark-goldenrod hover:bg-neighborhood-hover dark:hover:bg-neighborhood-dark-hover md:py-4 md:text-lg md:px-10"
                    >
                      Browse Tools
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/share"
                      className="w-full flex items-center justify-center px-8 py-3 border border-neighborhood-spruce text-base font-medium rounded-md text-neighborhood-spruce bg-neighborhood-mint hover:bg-neighborhood-mint/80 md:py-4 md:text-lg md:px-10"
                    >
                      Share a Tool
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-r from-neighborhood-spruce to-neighborhood-mint sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <svg className="w-32 h-32 text-white opacity-75" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-neighborhood-goldenrod font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neighborhood-slate sm:text-4xl">
              Better tool sharing
            </p>
            <p className="mt-4 max-w-2xl text-xl text-neighborhood-slate lg:mx-auto">
              Everything you need to share and borrow tools safely in your community.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neighborhood-goldenrod text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-neighborhood-slate">Easy Discovery</p>
                <p className="mt-2 ml-16 text-base text-neighborhood-slate">
                  Find the tools you need quickly with smart search and filtering options.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neighborhood-spruce text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-neighborhood-slate">Community Driven</p>
                <p className="mt-2 ml-16 text-base text-neighborhood-slate">
                  Connect with neighbors and build stronger community relationships.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neighborhood-mint text-neighborhood-spruce">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-neighborhood-slate">Safe & Secure</p>
                <p className="mt-2 ml-16 text-base text-neighborhood-slate">
                  Built-in safety features and user verification for worry-free sharing.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-neighborhood-rust text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-neighborhood-slate">Eco-Friendly</p>
                <p className="mt-2 ml-16 text-base text-neighborhood-slate">
                  Reduce waste and environmental impact by sharing instead of buying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
