import { createBrowserRouter, redirect } from "react-router-dom";
import { userRoutes } from "./users/users.router";
import { authRoutes } from "./auth/auth.router";
import { dashboardRoutes } from "./dashboard/dashboard.router";
import { Layout } from "@/components/ui/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", loader: () => redirect("/auth/login") },
      ...userRoutes,
      ...dashboardRoutes,
    ],
  },

  ...authRoutes,
]);
