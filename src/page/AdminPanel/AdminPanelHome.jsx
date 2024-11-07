import { Outlet } from "react-router-dom";
import Sidebar from "../../components/AdminPanel/Sidebar/Sidebar";
import "./index.css";
import Topbar from "../../components/AdminPanel/Topbar/TopBar";
export default function AdminPanelHome() {
  return (
    <>
      <div id="content">
        <Sidebar />
      </div>
      <div id="home" className="col-10">
        <Topbar />
        <div className="container-fluid" id="home-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
