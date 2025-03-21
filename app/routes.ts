// File: app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("@routes/_index.tsx"), // Home route
  route("@routes/books.tsx"),   // Lore route
  // Add more routes like: route("routes/yourpage.tsx"),
] satisfies RouteConfig;

console.log("Routes loaded:", routes);
