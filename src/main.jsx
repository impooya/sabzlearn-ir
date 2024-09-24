// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { OverlayProvider } from "./contexts/OverlayState";
import { SidebarProvider } from "./contexts/sidebarState";
import { CategorySideProvider } from "./contexts/CategorySideState";

createRoot(document.getElementById("root")).render(
  <OverlayProvider>
    <SidebarProvider>
      <CategorySideProvider>
        <RouterProvider router={router} />
      </CategorySideProvider>
    </SidebarProvider>
  </OverlayProvider>
);
