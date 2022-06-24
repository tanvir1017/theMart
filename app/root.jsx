import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import globalStyleSheet from "~/style/global.css";
import Navbar from "./Navbar/navbar";

export const links = () => {
  return [{rel:"StyleSheet", href:globalStyleSheet}]
}

export const meta = () => ({
  charset: "utf-8",
  title: "Remix Crud With Prisma",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
