import { createBrowserRouter } from "react-router-dom";
import { userRoutes } from "./users/users.router";
import { authRoutes } from "./auth/auth.router";
import { dashboardRoutes } from "./dashboard/dashboard.router";

export const router = createBrowserRouter([
  ...userRoutes,
  ...dashboardRoutes,
  ...authRoutes,
]);
