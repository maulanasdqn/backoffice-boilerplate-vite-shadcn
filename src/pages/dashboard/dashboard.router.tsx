import { DashboardAnalyticPage } from "./analytics/dashboard.analytics.page";
import { DashboardSettingPage } from "./settings/dashboard.settings.page";
import { DashboardPage } from "./summary/dashboard.summary.page";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    children: [
      { path: "", element: <DashboardPage /> },
      { path: "analytics", element: <DashboardAnalyticPage /> },
      { path: "settings", element: <DashboardSettingPage /> },
    ],
  },
];
