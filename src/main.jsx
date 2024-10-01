// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { OverlayProvider } from "./contexts/OverlayState";
import { SidebarProvider } from "./contexts/sidebarState";
import { CategorySideProvider } from "./contexts/CategorySideState";
import { WichSideBarProvider } from "./contexts/WichSideBarState";
import { CourseDetailsProvider } from "./contexts/CourseDetailsState";
import { ImageLoaderProvider } from "./contexts/ImageLoader";

createRoot(document.getElementById("root")).render(
  <OverlayProvider>
    <SidebarProvider>
      <CategorySideProvider>
        <WichSideBarProvider>
          <CourseDetailsProvider>
            <ImageLoaderProvider>
              <RouterProvider router={router} />
            </ImageLoaderProvider>
          </CourseDetailsProvider>
        </WichSideBarProvider>
      </CategorySideProvider>
    </SidebarProvider>
  </OverlayProvider>
);
