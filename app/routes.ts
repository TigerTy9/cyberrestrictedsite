// File: app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"), // Your home route
  route("routes/lore.tsx"),   // Your lore route
] satisfies RouteConfig;
