// File: app/routes.ts
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),          // Home page
  route("routes/lore.tsx"),          // Lore route
  route("routes/chat.tsx"),          // Chat with persona support
  route("routes/books.tsx"),         // Books route (from your import)
] satisfies RouteConfig;
