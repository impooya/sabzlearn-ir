import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { memo, useContext, useMemo } from "react";
import { SidebarContext } from "../contexts/sidebarState";
import { OverlayContext } from "../contexts/OverlayState";
import { WichSideBarContext } from "../contexts/WichSideBarState";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Header = memo(function Header() {
  const sidebarConfig = useContext(SidebarContext);
  const overlayConfig = useContext(OverlayContext);
  const wichSideBarConfig = useContext(WichSideBarContext);
  const authConfig = useContext(AuthContext);
  const getAllTopBarLinks = async () => {
    const links = await axios.get("http://localhost:4000/v1/menus/topbar");
    const linksData = await links.data;
    return linksData;
  };
  const getAllMenus = async () => {
    const menus = await axios.get("http://localhost:4000/v1/menus");
    const menusData = await menus.data;
    return menusData;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["topbar-links"],
    queryFn: getAllTopBarLinks,
  });

  const { data: emailInfo } = useQuery({
    queryKey: ["email-phone"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/infos/index");
      const data = await res.data;
      return data;
    },
  });
  const {
    data: menus,
    isError: isMenusErr,
    isLoading: isMenusLoading,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: getAllMenus,
  });
  const shuffleAllTopBarMenu = (arr, roundomCount) => {
    const shuffled = [...arr].sort(() => {
      return 0.5 - Math.random();
    });
    return shuffled.slice(0, roundomCount);
  };
  const memoizedTopBarLinks = useMemo(() => {
    if (isLoading) return <span>در حال بارگذاری...</span>;
    if (isError) return <span>خطایی رخ داد...</span>;
    return shuffleAllTopBarMenu(data, 5).map((link) => (
      <li key={link._id}>
        <Link
          to={
            link.href.includes("/course-info/") ||
            link.href.includes("course-info/")
              ? link.href
              : `/course-info/${link.href}`
          }
          className="hover:text-blue-300 transition-all delay-75 text-center tracking-tighter"
        >
          {link.title}
        </Link>
      </li>
    ));
  }, [data, isError, isLoading]);

  return (
    <>
      {/*top of main header*/}
      <header className="w-full">
        <section className="hidden md:flex justify-between items-center  w-full text-dark-primery bg-gray-primery p-5">
          {/*learn courses btn in top of main header*/}
          <div className="w-auto">
            <ul className=" flex w-full gap-3 justify-start items-center flex-wrap">
              {memoizedTopBarLinks}
            </ul>
          </div>
          {/*phone number and email website */}
          <div className="w-auto flex justify-center items-center gap-x-2 lg:flex-nowrap flex-wrap">
            <a
              href="#"
              className="inline-flex gap-1 items-center justify-center group"
            >
              <MdMail className="text-green-primery" />
              <span className="group-hover:text-blue-300 transition-all delay-75">
                {emailInfo?.email}
              </span>
            </a>
            <a
              href="#"
              className="inline-flex gap-1 items-center justify-center group"
            >
              <FaPhoneAlt className="text-green-primery" />
              <span className="group-hover:text-blue-300 transition-all delay-75">
                {emailInfo?.phone}
              </span>
            </a>
          </div>
        </section>
        {/*main header*/}
        <section className="w-full flex items-center justify-between text-dark-primery p-5">
          <div className="flex w-full justify-start items-center gap-3 ">
            <img src="\images\logo\Logo.png" className="lg:block hidden" />
            <ul className="hidden lg:flex justify-center items-center gap-3">
              <li>
                <Link to={"/"}>صفحه اصلی</Link>
              </li>
              {isMenusLoading ? (
                <span>در حال بارگذاری...</span>
              ) : isMenusErr ? (
                <span>خطایی رخ داد...</span>
              ) : (
                menus?.map((menu) => (
                  <li className="group relative" key={menu._id}>
                    <span className="flex justify-center items-center gap-1">
                      <Link to={`/category-info/${menu.href}/1`}>
                        {menu.title}
                      </Link>
                      <IoIosArrowDown />
                    </span>

                    <ul className="absolute z-[9999] flex flex-col justify-center items-start gap-y-3 top-full right-0 rounded-lg w-96 bg-white shadow-xl py-4 pr-4 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all child-hover:text-blue-600 child:transition-all border-b-green-primery border-b-4 delay-100">
                      {menu.submenus.map((submenu) => (
                        <li key={submenu._id}>
                          <Link
                            to={
                              submenu.href.includes("/course-info/") ||
                              submenu.href.includes("course-info/")
                                ? submenu.href
                                : `/course-info/${submenu.href}`
                            }
                          >
                            {submenu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))
              )}
            </ul>
            <button
              className="lg:hidden  w-10 h-10 bg-green-primery text-white rounded-lg flex justify-center items-center child:size-5 cursor-pointer"
              onClick={() => {
                sidebarConfig.sidebarOpenHnadler();
                overlayConfig.setIsShowOverLay(true);
                wichSideBarConfig.setWichSideBar("menu-sidebar");
              }}
            >
              <IoMdMenu />
            </button>
          </div>
          {/*user login and search and cart*/}
          <div className="flex justify-center items-center gap-1 flex-wrap lg:flex-nowrap tracking-tighter">
            <a
              href="a"
              className="bg-green-primery w-10 h-10 md:w-12 md:h-12 flex justify-center items-center child:size-5 md:child:size-6 text-white rounded-lg"
            >
              <FaSearch />
            </a>
            <a
              href="a"
              className="w-10 h-10 md:w-12 md:h-12 flex justify-center items-center child:size-5 md:child:size-6 bg-gray-primery rounded-lg"
            >
              <FaCartShopping />
            </a>
            {authConfig.isLoggedIn ? (
              <Link
                to={authConfig.isLoggedIn ? "/my-account" : "/login"}
                className="w-32 border-2  border-green-primery text-green-primery hidden lg:flex justify-center items-center h-11 rounded-md text-sm hover:bg-green-primery hover:text-white transition-all "
              >
                {authConfig.userInfos?.name}
              </Link>
            ) : (
              <Link
                to={"/register"}
                className="w-32 border-2  border-green-primery text-green-primery hidden lg:flex justify-center items-center h-11 rounded-md text-sm hover:bg-green-primery hover:text-white transition-all "
              >
                وارد شوید/ثبت‌نام کنید
              </Link>
            )}

            <Link
              href="/login"
              className="bg-green-primery w-10 h-10 md:w-12 md:h-12 flex lg:hidden justify-center items-center child:size-5 md:child:size-6 text-white rounded-lg "
            >
              <FaRegUser />
            </Link>
          </div>
        </section>
      </header>
    </>
  );
});
export default Header;
