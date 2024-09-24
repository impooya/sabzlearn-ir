// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { OverlayProvider } from "./contexts/OverlayState";
import { SidebarProvider } from "./contexts/sidebarState";
import { CategorySideProvider } from "./contexts/CategorySideState";
import { WichSideBarProvider } from "./contexts/WichSideBarState";

createRoot(document.getElementById("root")).render(
  <OverlayProvider>
    <SidebarProvider>
      <CategorySideProvider>
        <WichSideBarProvider>
          <RouterProvider router={router} />
        </WichSideBarProvider>
      </CategorySideProvider>
    </SidebarProvider>
  </OverlayProvider>
);
