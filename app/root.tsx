import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { Navigation } from "~/components/common/navigation";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="MarketBot" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MarketBot" />
        <meta name="description" content="Track and search Altered TCG card prices and abilities" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Icons */}
        <link rel="icon" type="image/svg+xml" sizes="192x192" href="/assets/icon-192.svg" />
        <link rel="icon" type="image/svg+xml" sizes="512x512" href="/assets/icon-512.svg" />
        <link rel="apple-touch-icon" href="/assets/icon-192.svg" />
        
        <Meta />
        <Links />
      </head>
      <body>
        <Navigation />
        {children}
        <ScrollRestoration />
        <Scripts />
<<<<<<< Updated upstream
=======
        {/* Register Service Worker */}
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('ServiceWorker registered:', registration.scope);
                })
                .catch(function(error) {
                  console.log('ServiceWorker registration failed:', error);
                });
            });
          }
        ` }} />
        {/* Hide loading overlay after hydration */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.addEventListener('load', function() {
            setTimeout(function() {
              document.getElementById('loading-overlay').classList.add('ready');
            }, 100);
          });
        ` }} />
>>>>>>> Stashed changes
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
