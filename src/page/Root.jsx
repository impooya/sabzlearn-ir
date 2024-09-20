import { useContext } from "react";
import Header from "../components/Header";
import { SidebarContext } from "../contexts/sidebarState";
import SideBar from "../components/SideBar";
import Overlay from "../components/Overlay";
import { Outlet } from "react-router-dom";

export default function Root() {
  const sidebarConfig = useContext(SidebarContext);
  return (
    <>
      <header className="w-full">
        <Header />
      </header>
      <aside
        className={`fixed top-0 right-0 z-[9999] bottom-0 h-auto ${
          sidebarConfig.isOpenSideBar ? "" : "translate-x-[250px]"
        } transition-all`}
      >
        <SideBar />
      </aside>
      <Outlet />
      <Overlay />
    </>
  );
}
