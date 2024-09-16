import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
function Header() {
  return (
    <>
      {/*top of main header*/}
      <section className="hidden md:flex justify-between items-center  w-full text-dark-primery bg-[#f0f2f7] p-5">
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
          <img src="\images\logo\Logo.png" />
          <ul className="flex justify-center items-center gap-3">
            <li>
              <a href="a">صفحه اصلی</a>
            </li>
            <li>
              <span className="flex justify-center items-center gap-1">
                <a href="#">فرانت اند</a>
                <IoIosArrowDown />
              </span>
              <ul className="hidden">
                <li>
                  <a>آموزش Html</a>
                </li>
                <li>
                  <a>آموزش Css</a>
                </li>
                <li>
                  <a>آموزش جاوا اسکریپت</a>
                </li>
                <li>
                  <a>آموزش Flex Box</a>
                </li>
                <li>
                  <a>آموزش جامع ری اکت</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="flex justify-center items-center gap-1">
                <a href="#">امنیت</a>
                <IoIosArrowDown />
              </span>
              <ul className="hidden">
                <li>
                  <a>آموزش کالی لینوکس</a>
                </li>
                <li>
                  <a>آموزش پایتون سیاه</a>
                </li>
                <li>
                  <a>آموزش جاوا اسکریپت سیاه</a>
                </li>
                <li>
                  <a>اموزش شبکه</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="flex justify-center items-center gap-1">
                <a href="#">مقالات</a>
                <IoIosArrowDown />
              </span>
              <ul className="hidden">
                <li>
                  <a>توسعه وب</a>
                </li>
                <li>
                  <a>جاوا اسکریپت</a>
                </li>
                <li>
                  <a>فرانت اند</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="flex justify-center items-center gap-1">
                <a href="#">پایتون</a>
                <IoIosArrowDown />
              </span>
              <ul className="hidden">
                <li>
                  <a>دوره متخصص پایتون</a>
                </li>
                <li>
                  <a>دوره هوش مصنوعی با پایتون</a>
                </li>
                <li>
                  <a>دوره متخصص جنگو</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">مهارت های نرم</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-1 flex-wrap lg:flex-nowrap tracking-tighter">
          <a
            href="a"
            className="bg-green-primery w-12 h-12 flex justify-center items-center child:size-6 text-white rounded-lg"
          >
            <FaSearch />
          </a>
          <a
            href="a"
            className="w-12 h-12 flex justify-center items-center child:size-6 bg-[#f0f2f7] rounded-lg"
          >
            <FaCartShopping />
          </a>
          <a
            href="a"
            className="w-32 border-2  border-green-primery hidden lg:flex justify-center items-center h-11 rounded-md text-sm hover:bg-green-primery hover:text-white transition-all "
          >
            Pooya Samarkar
          </a>
          <a
            href="#"
            className="bg-green-primery w-12 h-12 flex lg:hidden justify-center items-center child:size-6 text-white rounded-lg "
          >
            <FaRegUser />
          </a>
        </div>
      </section>
    </>
  );
}

export default Header;
