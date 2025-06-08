import {
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import globalStyles from "~/styles/global.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStyles },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Toolshed</title>
        <Links />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f7fafc" }}>
        <nav style={{ backgroundColor: "white", borderBottom: "1px solid #e2e8f0", padding: "1rem 0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold", color: "#2d3748" }}>Toolshed</h1>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="/login" style={{ color: "#4a5568", textDecoration: "none" }}>Sign In</a>
              <a href="/register" style={{ backgroundColor: "#f6ad55", color: "white", padding: "0.5rem 1rem", borderRadius: "0.25rem", textDecoration: "none" }}>Join</a>
            </div>
          </div>
        </nav>
        <Outlet />
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
      <html lang="en">
        <head>
          <title>Error - Toolshed</title>
          <Links />
        </head>
        <body style={{ margin: 0, padding: 0, backgroundColor: "#f7fafc" }}>
          <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "4rem", fontWeight: "bold", color: "#1a202c", marginBottom: "1rem" }}>
                {error.status}
              </h1>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#2d3748", marginBottom: "1rem" }}>
                {error.statusText}
              </h2>
              <p style={{ color: "#4a5568", marginBottom: "2rem" }}>
                {error.data || "Something went wrong. Please try again later."}
              </p>
              <a
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#f6ad55",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "0.5rem",
                  fontWeight: "600"
                }}
              >
                Go Home
              </a>
            </div>
          </div>
          <Scripts />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <title>Error - Toolshed</title>
        <Links />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f7fafc" }}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1a202c", marginBottom: "1rem" }}>
              Something went wrong
            </h1>
            <p style={{ color: "#4a5568", marginBottom: "2rem" }}>
              We encountered an unexpected error. Please try again later.
            </p>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#f6ad55",
                color: "white",
                textDecoration: "none",
                borderRadius: "0.5rem",
                fontWeight: "600"
              }}
            >
              Go Home
            </a>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}