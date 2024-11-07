import { useContext } from "react";
import "./Sidebar.css";
import { AuthContext } from "../../../contexts/authContext";
import { useNavigate } from "react-router-dom";
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
          <li className="active-menu">
            <a href="#">
              <span>صفحه اصلی</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>دوره ها</span>
            </a>
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
            <a href="#">
              <span>کاربران</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>کدهای تخفیف</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>دسته‌بندی‌ها</span>
            </a>
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
