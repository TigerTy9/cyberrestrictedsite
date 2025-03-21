import { index } from "@react-router/dev/routes";
import type { RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "about",
    file: "routes/about.tsx",
  },
  {
    path: "books",
    file: "routes/books.tsx",
  },
] satisfies RouteConfig;