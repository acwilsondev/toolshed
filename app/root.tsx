import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { ThemeProvider } from "~/utils/theme";
import globalStyles from "~/styles/global.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Toolshed - Community Resource Sharing" },
    { name: "description", content: "Share tools and resources in your community" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStyles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
    },
  ];
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-neighborhood-cloud dark:bg-neighborhood-dark-cloud text-neighborhood-slate dark:text-neighborhood-dark-slate">
        <ThemeProvider>
          <Layout>
            <Outlet />
          </Layout>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en" className="h-full">
        <head>
          <title>Error - Toolshed</title>
          <Meta />
          <Links />
        </head>
        <body className="h-full bg-neighborhood-cloud text-neighborhood-slate">
          <Layout>
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">
                  {error.status}
                </h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  {error.statusText}
                </h2>
                <p className="text-gray-600 mb-8">
                  {error.data || "Something went wrong. Please try again later."}
                </p>
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Go Home
                </a>
              </div>
            </div>
          </Layout>
          <Scripts />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className="h-full">
      <head>
        <title>Error - Toolshed</title>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-neighborhood-cloud text-neighborhood-slate">
        <Layout>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-neighborhood-slate mb-4">
                Unexpected Error
              </h1>
              <p className="text-neighborhood-slate mb-8">
                An unexpected error occurred. Please try refreshing the page.
              </p>
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-neighborhood-goldenrod hover:bg-neighborhood-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neighborhood-goldenrod"
              >
                Go Home
              </a>
            </div>
          </div>
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}
