import { Outlet } from "react-router-dom";
import Sidebar from "../../components/UserPanel/Sidebar/Sidebar";
import "./Index.css";

function Index() {
  return (
    <>
      <section className="content">
        <div className="content-header">
          <div className="container">
            <span className="content-header__title">حساب کاربری من</span>
            <span className="content-header__subtitle">پیشخوان</span>
          </div>
        </div>
        <div className="content-main">
          <div className="container">
            <div className="row">
              <Sidebar />

              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
