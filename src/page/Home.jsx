import { useContext } from "react";
import Header from "../components/Header";
import Overlay from "../components/Overlay";
import SideBar from "../components/SideBar";
import { SidebarContext } from "../contexts/sidebarState";

export default function Home() {
  const sidebarConfig = useContext(SidebarContext);
  return (
    <>
      <header className="w-full">
        <Header />
      </header>
      <aside
        className={`absolute top-0 right-0 z-[9999] bottom-0 h-auto ${
          sidebarConfig.isOpenSideBar ? "" : "translate-x-[250px]"
        } transition-all`}
      >
        <SideBar />
      </aside>
      <Overlay />
      <main>
        <section>
          <div></div>
        </section>
      </main>
    </>
  );
}
