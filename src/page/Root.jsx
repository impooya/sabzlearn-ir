import { OverlayProvider } from "../contexts/OverlayState";
import { SidebarProvider } from "../contexts/sidebarState";
import Home from "./Home";

export default function Root() {
  return (
    <>
      <OverlayProvider>
        <SidebarProvider>
          <Home />
        </SidebarProvider>
      </OverlayProvider>
    </>
  );
}
