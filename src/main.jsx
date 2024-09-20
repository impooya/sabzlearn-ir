// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { OverlayProvider } from "./contexts/OverlayState";
import { SidebarProvider } from "./contexts/sidebarState";

createRoot(document.getElementById("root")).render(
  <OverlayProvider>
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  </OverlayProvider>
);
