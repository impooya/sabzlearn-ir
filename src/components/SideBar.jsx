import { IoIosArrowDown, IoMdClose } from "react-icons/io";
function SideBar() {
  return (
    <>
      <section className="bg-white h-full w-56 pt-3 px-5 flex flex-col items-start justify-start text-dark-primery md:hidden">
        <div className="flex justify-between items-center w-full border-b border-b-zinc-500/20 pb-2">
          <img src="\images\logo\Logo.png" className="h-10 w-16" />
          <button type="button">
            <IoMdClose />
          </button>
        </div>
        <nav className=" w-full mt-3">
          <ul className="flex flex-col justify-start items-start gap-3 ">
            <li className="">
              <a href="a">صفحه اصلی</a>
            </li>
            <li>
              <span className="flex justify-center items-center gap-1">
                <a href="#">فرانت اند</a>
                <IoIosArrowDown />
              </span>
              <ul className="hidden">
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
            <li>
              <span className="flex justify-center items-center gap-1">
                <a href="#">امنیت</a>
                <IoIosArrowDown />
              </span>
              <ul className="hidden">
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
            <li>
              <span className="flex justify-center items-center gap-1">
                <a href="#">مقالات</a>
                <IoIosArrowDown />
              </span>
              <ul className="hidden">
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
            <li>
              <span className="flex justify-center items-center gap-1">
                <a href="#">پایتون</a>
                <IoIosArrowDown />
              </span>
              <ul className="hidden">
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
        </nav>
      </section>
    </>
  );
}

export default SideBar;
