import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import stylesheet from "./styles/app.css?url";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export const meta = () => [
  { title: "Hydrogen Template" },
  {
    name: "description",
    content: "A simple editorial storefront homepage built with Remix.",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
