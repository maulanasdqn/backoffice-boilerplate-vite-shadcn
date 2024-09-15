import { Sidebar } from "lucide-react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <section className="w-full flex">
      <Sidebar />
      <Outlet />
    </section>
  );
};
