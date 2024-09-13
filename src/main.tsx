import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ReactQueryProvider } from "./libs/react-query/react-query.provider";
import { router } from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  </StrictMode>,
);
