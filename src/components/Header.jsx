import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <>
      {/*top of main header*/}
      <section>
        {/*learn courses btn in top of main header*/}
        <div>
          <ul>
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
              <a>آموزش بوت استرپ</a>
            </li>
            <li>
              <a>آموزش پایتون</a>
            </li>
            <li>
              <a>آموزش ری اکت</a>
            </li>
            <li>
              <a>20_000 تومان</a>
            </li>
          </ul>
        </div>
        {/*phone number and email website */}
        <div>
          <a>
            <MdMail />
            <span>sabzlearn@gmail.com</span>
          </a>
          <a>
            <FaPhoneAlt />
            <span>09921558293</span>
          </a>
        </div>
      </section>
      {/*main header*/}
      <section>
        <div>
          <img></img>
          <ul>
            <li>
              <a>صفحه اصلی</a>
            </li>
            <li>
              <span>
                <IoIosArrowDown />
                <a>فرانت اند</a>
              </span>
              <ul>
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
              <span>
                <IoIosArrowDown />
                <a>امنیت</a>
              </span>
              <ul>
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
              <span>
                <IoIosArrowDown />
                <a>مقالات</a>
              </span>
              <ul>
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
              <span>
                <IoIosArrowDown />
                <a>پایتون</a>
              </span>
              <ul>
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
              <a>مهارت های نرم</a>
            </li>
          </ul>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default Header;
