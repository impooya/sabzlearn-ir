import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Overlay from "../components/Overlay";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Overlay />
    </>
  );
}
