/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Overlay from "../components/Overlay";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/authContext";

export default function Root() {
  const location = useLocation();
  const navigate = useNavigate();

  const authConfig = useContext(AuthContext);
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          authConfig.setIsLoggedIn(true);
          authConfig.setUserInfos(userData);
        });
    } else {
      authConfig.setIsLoggedIn(false);
    }
  }, [authConfig.login, authConfig.logout]);
  useEffect(() => {
    if (
      authConfig.isLoggedIn &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      navigate("/");
    }
  }, [authConfig.isLoggedIn, location.pathname, navigate]);
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Overlay />
      <Footer />
    </>
  );
}
