import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import Inputs from "./Inputs";

function MainLogin() {
  return (
    <>
      <section className="flex justify-center relative overflow-hidden before:content-[''] before:absolute before:-top-20 before:w-[150%] before:bg-[#2bce56] before:h-[380px] before:z-[-1] before:rotate-[4deg] after:content-[''] after:absolute after:w-[150%] after:h-[380px] after:bg-[rgb(43,206,86,0.6)] after:z-[-9999] after:-rotate-[4deg]">
        <div className="flex flex-col items-center my-16 mx-0 pt-[2.5rem] pr-[2rem] pb-[5rem] pl-[2rem] bg-white shadow-[0_6px_20px_rgba(168,172,185,0.3)] rounded-md w-[30rem] border-b-4 border-solid border-b-[#2bce56]">
          <span className=" block text-[#7b868a] text-2xl">
            ورود به حساب کاربری
          </span>
          <span className=" block text-[#7b868a] text-xl">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className=" bg-white my-4 mx-0 rounded-md w-full justify-center flex items-center py-4 px-0">
            <span className=" text-[#7b868a] text-lg">کاربر جدید هستید؟</span>
            <Link
              className="login__new-member-link bg-[#a8aaaf] text-white text-lg mr-[0.6rem] rounded-md py-1.5 px-[0.8rem]"
              to="/register"
            >
              ثبت نام
            </Link>
          </div>
          <form action="#" className="login-form w-full ">
            <div className="login-form__username relative">
              <Inputs
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                mainElement="input"
                className="w-full border border-solid border-[#e6e6e6] py-4 px-[1.1rem] shadow-[0_1px_3px_0_rgba(0,0,0,0.06)] my-[0.8rem] mx-0 rounded text-sm xs:text-[1.4rem]"
              />
              <FaRegUser className="absolute left-6 top-8 text-2xl xs:text-[2.2rem] text-[#ccc]" />
            </div>
            <div className="login-form__password relative">
              <Inputs
                type="text"
                placeholder="رمز عبور"
                mainElement="input"
                className="w-full border border-solid border-[#e6e6e6] py-4 px-[1.1rem] shadow-[0_1px_3px_0_rgba(0,0,0,0.06)] my-[0.8rem] mx-0 rounded text-sm xs:text-[1.4rem]"
              />
              <RiLockPasswordLine className="absolute left-6 top-8 text-2xl xs:text-[2.2rem] text-[#ccc]" />
            </div>
            <button
              className="login-form__btn w-full border-none rounded py-[1.2rem] px-0 mt-1.5 flex items-center bg-[#2bce56] relative "
              type="submit"
            >
              <CiLogin className=" text-white text-2xl absolute right-4" />
              <span className="login-form__btn-text text-xl text-white my-0 mx-auto">
                ورود
              </span>
            </button>
            <div className="login-form__password-setting flex justify-between items-center my-4 mx-0">
              <label className="login-form__password-remember flex items-center">
                <input className=" ml-2" type="checkbox" />
                <span className="login-form__password-text text-[#6c757d] text-sm">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget ">
                <a className=" text-[#7b868a] text-[1rem]" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
          <div className="login__des mt-12 text-[#7b868a] text-lg w-full">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list list-disc mr-8 mt-4">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainLogin;
