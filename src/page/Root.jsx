import SidebarProvider from "../contexts/sidebarState";
import Home from "./Home";

export default function Root() {
  return (
    <>
      <SidebarProvider>
        <Home />
      </SidebarProvider>
    </>
  );
}
