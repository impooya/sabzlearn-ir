import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useContext } from "react";
import { SidebarContext } from "../contexts/sidebarState";
import { OverlayContext } from "../contexts/OverlayState";
import { WichSideBarContext } from "../contexts/WichSideBarState";
import { Link } from "react-router-dom";
function Header() {
  const sidebarConfig = useContext(SidebarContext);
  const overlayConfig = useContext(OverlayContext);
  const wichSideBarConfig = useContext(WichSideBarContext);
  return (
    <>
      {/*top of main header*/}
      <header className="w-full">
        <section className="hidden md:flex justify-between items-center  w-full text-dark-primery bg-gray-primery p-5">
          {/*learn courses btn in top of main header*/}
          <div className="w-auto">
            <ul className=" flex w-full gap-3 justify-center items-center">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-all delay-75 text-center tracking-tighter"
                >
                  آموزش Html
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-all delay-75 text-center tracking-tighter"
                >
                  آموزش Css
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-all delay-75 text-center tracking-tighter"
                >
                  آموزش جاوا اسکریپت
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-all delay-75 text-center tracking-tighter "
                >
                  آموزش بوت استرپ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-all delay-75 text-center tracking-tighter"
                >
                  آموزش پایتون
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-all delay-75 text-center tracking-tighter"
                >
                  آموزش ری اکت
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-all delay-75 text-center tracking-tighter"
                >
                  20000 تومان
                </a>
              </li>
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
                sabzlearn@gmail.com
              </span>
            </a>
            <a
              href="#"
              className="inline-flex gap-1 items-center justify-center group"
            >
              <FaPhoneAlt className="text-green-primery" />
              <span className="group-hover:text-blue-300 transition-all delay-75">
                09921558293
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
                <a href="a">صفحه اصلی</a>
              </li>
              <li className="group relative">
                <span className="flex justify-center items-center gap-1">
                  <a href="#">فرانت اند</a>
                  <IoIosArrowDown />
                </span>
                <ul className="absolute flex flex-col justify-center items-start gap-y-3 top-full right-0 rounded-lg w-96 bg-white shadow-xl py-4 pr-4 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all child-hover:text-blue-600 child:transition-all border-b-green-primery border-b-4 delay-100">
                  <li>
                    <a href="#">آموزش Html</a>
                  </li>
                  <li>
                    <a href="#">آموزش Css</a>
                  </li>
                  <li>
                    <a href="#">آموزش جاوا اسکریپت</a>
                  </li>
                  <li>
                    <a href="#">آموزش Flex Box</a>
                  </li>
                  <li>
                    <a href="#">آموزش جامع ری اکت</a>
                  </li>
                </ul>
              </li>
              <li className="group relative">
                <span className="flex justify-center items-center gap-1">
                  <a href="#">امنیت</a>
                  <IoIosArrowDown />
                </span>
                <ul className="absolute flex flex-col justify-center items-start gap-y-3 top-full left-0 right-0 rounded-lg w-96 bg-white shadow-xl py-4 pr-4 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all child-hover:text-blue-600 child:transition-all border-b-green-primery border-b-4 delay-100">
                  <li>
                    <a href="#">آموزش کالی لینوکس</a>
                  </li>
                  <li>
                    <a href="#">آموزش پایتون سیاه</a>
                  </li>
                  <li>
                    <a href="#">آموزش جاوا اسکریپت سیاه</a>
                  </li>
                  <li>
                    <a href="#">اموزش شبکه</a>
                  </li>
                </ul>
              </li>
              <li className="group relative">
                <span className="flex justify-center items-center gap-1">
                  <a href="#">مقالات</a>
                  <IoIosArrowDown />
                </span>
                <ul className="absolute flex flex-col justify-center items-start gap-y-3 top-full left-0 right-0 rounded-lg w-96 bg-white shadow-xl py-4 pr-4 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all child-hover:text-blue-600 child:transition-all border-b-green-primery border-b-4 delay-100">
                  <li>
                    <a href="#">توسعه وب</a>
                  </li>
                  <li>
                    <a href="#">جاوا اسکریپت</a>
                  </li>
                  <li>
                    <a href="#">فرانت اند</a>
                  </li>
                </ul>
              </li>
              <li className="group relative">
                <span className="flex justify-center items-center gap-1">
                  <a href="#">پایتون</a>
                  <IoIosArrowDown />
                </span>
                <ul className="absolute flex flex-col justify-center items-start gap-y-3 top-full left-0 right-0 rounded-lg w-96 bg-white shadow-xl py-4 pr-4 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all child-hover:text-blue-600 child:transition-all border-b-green-primery border-b-4 delay-100">
                  <li>
                    <a href="#">دوره متخصص پایتون</a>
                  </li>
                  <li>
                    <a href="#">دوره هوش مصنوعی با پایتون</a>
                  </li>
                  <li>
                    <a href="#">دوره متخصص جنگو</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">مهارت های نرم</a>
              </li>
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
            <Link
              to={"/login"}
              className="w-32 border-2  border-green-primery text-green-primery hidden lg:flex justify-center items-center h-11 rounded-md text-sm hover:bg-green-primery hover:text-white transition-all "
            >
              Pooya Samarkar
            </Link>
            <a
              href="#"
              className="bg-green-primery w-10 h-10 md:w-12 md:h-12 flex lg:hidden justify-center items-center child:size-5 md:child:size-6 text-white rounded-lg "
            >
              <FaRegUser />
            </a>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
