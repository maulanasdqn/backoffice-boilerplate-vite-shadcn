import { AuthLayout } from "./auth.layout";
import { AuthLoginPage } from "./login/auth.login.page";
import { AuthRegisterPage } from "./register/auth.register.page";

export const authRoutes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <AuthLoginPage />,
      },
      {
        path: "register",
        element: <AuthRegisterPage />,
      },
    ],
  },
];
