// File: app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_home.tsx"),
  route("routes/books.tsx")
] satisfies RouteConfig;
