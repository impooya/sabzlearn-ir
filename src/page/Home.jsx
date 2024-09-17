import Header from "../components/Header";
import Overlay from "../components/Overlay";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      <header className="w-full">
        <Header />
      </header>
      <aside className="absolute top-0 right-0 z-[9999] bottom-0 h-auto">
        <SideBar />
      </aside>
      <Overlay />
    </>
  );
}
