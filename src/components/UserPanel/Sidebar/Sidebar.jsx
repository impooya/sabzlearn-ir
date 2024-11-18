import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Sidebar() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  function userLogOut() {
    Swal.fire({
      title: "خروج از حساب کاربری",
      text: "آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، خارج شوم",
      cancelButtonText: "خیر، بمانم",
    }).then((result) => {
      if (result.isConfirmed) {
        authContext.logout();
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "خروج موفق",
          text: "شما با موفقیت از حساب کاربری خود خارج شدید.",
        });
      }
    });
  }
  return (
    <div className="col-3">
      <div className="sidebar">
        <span className="sidebar__name">محمدامین سعیدی راد</span>
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <Link className="sidebar__link" to="/my-account">
              پیشخوان
            </Link>
          </li>
          <li className="sidebar__item">
            <Link className="sidebar__link" to={"orders"}>
              سفارش ها
            </Link>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="#">
              کیف پول من
            </a>
          </li>
          <li className="sidebar__item">
            <Link className="sidebar__link" to="edit-account">
              جزئیات حساب کاربری
            </Link>
          </li>
          <li className="sidebar__item">
            <Link className="sidebar__link" to="courses">
              دوره های خریداری شده
            </Link>
          </li>
          <li className="sidebar__item">
            <Link className="sidebar__link" to="tickets">
              تیکت های پشتیبانی
            </Link>
          </li>
          <li className="sidebar__item" onClick={userLogOut}>
            <a className="sidebar__link" href="#">
              خروج از سیستم
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
