import { useContext } from "react";
import "./Sidebar.css";
import { AuthContext } from "../../../contexts/authContext";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Sidebar() {
  const authConfig = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutAdmin = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "با موفقیت لاگ‌آوت شدین",
      icon: "success",
      confirmButtonText: "اوکی",
    }).then(() => {
      authConfig.logout();
      navigate("/");
    });
  };
  return (
    <div id="sidebar" className="col-2">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <a href="#">
            <img src="/images/logo/Logo.png" alt="Logo" />
          </a>
        </div>

        <div className="sidebar-menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <a href="#">
              <span>صفحه اصلی</span>
            </a>
          </li>
          <li>
            <NavLink
              to={"courses"}
              className={({ isActive }) => (isActive ? "active-menu" : "")}
            >
              <span>دوره ها</span>
            </NavLink>
          </li>
          <li>
            <a href="#">
              <span>منو ها</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>مقاله ها</span>
            </a>
          </li>
          <li>
            <NavLink
              to="users"
              className={({ isActive }) => (isActive ? "active-menu" : "")}
            >
              <span>کاربران</span>
            </NavLink>
          </li>
          <li>
            <a href="#">
              <span>کدهای تخفیف</span>
            </a>
          </li>
          <li>
            <NavLink
              to="category"
              className={({ isActive }) => (isActive ? "active-menu" : "")}
            >
              <span>دسته‌بندی‌ها</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contacts"
              className={({ isActive }) => (isActive ? "active-menu" : "")}
            >
              <span>پیغام ها</span>
            </NavLink>
          </li>
          <li>
            <a href="#" onClick={logoutAdmin}>
              <span>خروج</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
