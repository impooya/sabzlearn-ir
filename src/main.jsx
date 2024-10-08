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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./contexts/authContext";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <OverlayProvider>
      <SidebarProvider>
        <CategorySideProvider>
          <WichSideBarProvider>
            <CourseDetailsProvider>
              <ImageLoaderProvider>
                <AuthProvider>
                  <RouterProvider router={router} />
                  <ReactQueryDevtools initialIsOpen={false} />
                </AuthProvider>
              </ImageLoaderProvider>
            </CourseDetailsProvider>
          </WichSideBarProvider>
        </CategorySideProvider>
      </SidebarProvider>
    </OverlayProvider>
  </QueryClientProvider>
);
