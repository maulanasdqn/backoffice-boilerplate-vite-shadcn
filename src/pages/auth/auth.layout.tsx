import type { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = (): ReactElement => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
