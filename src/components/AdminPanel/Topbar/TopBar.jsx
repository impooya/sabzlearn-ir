import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
export default function Topbar() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const [isShowNotfication, setIsShowNotfication] = useState(false);

  const { data } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
      const data = await res.data;
      return data;
    },
  });

  return (
    <div className="container-fluid">
      <div className="container">
        <div
          className={`home-header  ${
            isShowNotfication ? "active-modal-notfication" : ""
          }`}
        >
          <div className="home-right">
            <div className="home-searchbar">
              <input
                type="text"
                className="search-bar"
                placeholder="جستجو..."
              />
            </div>
            <div
              className="home-notification"
              onMouseEnter={() => {
                setIsShowNotfication(true);
              }}
            >
              <button type="button">
                <i className="far fa-bell"></i>
              </button>
            </div>
            <div
              className="home-notification-modal"
              onMouseEnter={() => {
                setIsShowNotfication(true);
              }}
              onMouseLeave={() => {
                setIsShowNotfication(false);
              }}
            >
              {data?.notifications.length === 0 ? (
                <li className="home-notification-modal-item">
                  <span className="home-notification-modal-text">
                    پیغامی واسه نمایش وجود ندارد
                  </span>
                </li>
              ) : (
                <ul className="home-notification-modal-list">
                  {data?.notifications.map((notfication) => {
                    <li className="home-notification-modal-item">
                      <span className="home-notification-modal-text">
                        {notfication}
                      </span>
                      <label className="switch">
                        <input type="checkbox" checked />
                        <span className="slider round"></span>
                      </label>
                    </li>;
                  })}
                </ul>
              )}
            </div>
          </div>
          <div className="home-left">
            <div className="home-profile">
              <div className="home-profile-image">
                <a href="#">
                  <img src="/images/info/1.gif" alt="" />
                </a>
              </div>
              <div className="home-profile-name">
                <a href="#">{data?.name}</a>
              </div>
              <div className="home-profile-icon">
                <i className="fas fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
