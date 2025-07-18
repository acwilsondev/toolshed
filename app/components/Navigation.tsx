import { Link, useLocation, useLoaderData } from "@remix-run/react";
import { useState } from "react";

interface NavigationProps {
  user?: { id: string; name: string; email: string } | null;
}

export function Navigation({ user }: NavigationProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isAuthenticated = !!user;
  
  const publicNavigation = [
    { name: "Home", href: "/", current: location.pathname === "/" },
    { name: "Browse", href: "/browse", current: location.pathname === "/browse" },
  ];

  const authenticatedNavigation = [
    { name: "Home", href: "/", current: location.pathname === "/" },
    { name: "Browse", href: "/browse", current: location.pathname === "/browse" },
    { name: "Share", href: "/share", current: location.pathname === "/share" },
    { name: "Profile", href: "/profile", current: location.pathname === "/profile" },
  ];

  const navigation = isAuthenticated ? authenticatedNavigation : publicNavigation;

  return (
    <nav className="bg-white shadow-sm border-b border-neighborhood-mint/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-neighborhood-spruce">
                Toolshed
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    item.current
                      ? "border-neighborhood-goldenrod text-neighborhood-spruce"
                      : "border-transparent text-neighborhood-slate hover:text-neighborhood-spruce hover:border-neighborhood-mint"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth controls */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-neighborhood-slate">Welcome back, {user?.name}!</span>
                <Link
                  to="/logout"
                  className="px-4 py-2 text-sm font-medium text-neighborhood-slate hover:text-neighborhood-spruce"
                >
                  Sign Out
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-sm font-medium text-neighborhood-slate hover:text-neighborhood-spruce"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-neighborhood-goldenrod text-white rounded-lg hover:bg-neighborhood-goldenrod/90 transition-colors text-sm font-medium"
                >
                  Join Community
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neighborhood-slate hover:text-neighborhood-spruce hover:bg-neighborhood-mint/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neighborhood-goldenrod"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  item.current
                    ? "bg-neighborhood-mint/20 border-neighborhood-goldenrod text-neighborhood-spruce"
                    : "border-transparent text-neighborhood-slate hover:text-neighborhood-spruce hover:bg-neighborhood-mint/10 hover:border-neighborhood-mint"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
