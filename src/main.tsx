import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

// global styles
import "./index.css";

// pages
import Home from "./pages/home.tsx";

// router
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
