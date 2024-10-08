import { CiLogin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";
import Inputs from "./Inputs";
import Button from "./Button";
import axios from "axios";
import {
  emailValidator,
  maxValidator,
  minValidator,
  requiredValidator,
  phoneValidator,
} from "../Validator/rules";
import { useForm } from "../Hooks/useForm";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

function MainRegister() {
  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      confirmPassword: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const authConfig = useContext(AuthContext);
  console.log(authConfig);

  // console.log(formState);
  const { mutate: registerNewUser } = useMutation({
    mutationKey: ["new-user"],
    mutationFn: (newUser) => {
      return axios.post("http://localhost:4000/v1/auth/register", newUser);
    },
    onSuccess: (res) => {
      console.log(res);
      authConfig.login(res.data.user, res.data.accessToken);
    },
    onError: (err) => {
      console.error(err);
    },
  });
  const userRegister = (event) => {
    event.preventDefault();
    const newUser = {
      username: formState.inputs.username.value,
      name: formState.inputs.name.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      phone: formState.inputs.password.value,
      confirmPassword: formState.inputs.confirmPassword.value,
    };
    // console.log(newUser);
    if (newUser.confirmPassword === newUser.password) {
      registerNewUser(newUser);
      // console.log("User Login");
    } else {
      alert("رمز عبور شما تطابق ندارد");
    }
  };
  return (
    <>
      <section className="flex justify-center relative overflow-hidden before:content-[''] before:absolute before:-top-20 before:w-[150%] before:bg-[#2bce56] before:h-[380px] before:z-[-1] before:rotate-[4deg] after:content-[''] after:absolute after:w-[150%] after:h-[380px] after:bg-[rgb(43,206,86,0.6)] after:z-[-9999] after:-rotate-[4deg]">
        <div className="flex flex-col items-center my-16 mx-0 pt-[2.5rem] pr-[2rem] pb-[5rem] pl-[2rem] bg-white shadow-[0_6px_20px_rgba(168,172,185,0.3)] rounded-md w-[30rem] border-b-4 border-solid border-b-[#2bce56]register-form">
          <span className="block text-[#7b868a] text-2xl">
            ساخت حساب کاربری
          </span>
          <span className="block text-[#7b868a] text-xl">
            خوشحالیم قراره به جمع ما بپیوندی
          </span>
          <div className="bg-white my-4 mx-0 rounded-md w-full justify-center flex items-center py-4 px-0">
            <span className="text-[#7b868a] text-lg">
              قبلا ثبت‌نام کرده‌اید؟
            </span>
            <Link
              className="bg-[#a8aaaf] text-white text-lg mr-[0.6rem] rounded-md py-1.5 px-[0.8rem]"
              to="/login"
            >
              وارد شوید
            </Link>
          </div>
          <form action="#" className="w-full ">
            <div className=" relative">
              <Inputs
                type="text"
                id="name"
                placeholder="نام و نام خانوادگی"
                mainElement="input"
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
                className="w-full border border-solid border-[#e6e6e6] py-4 px-[1.1rem] shadow-[0_1px_3px_0_rgba(0,0,0,0.06)] my-[0.8rem] mx-0 rounded text-sm xs:text-[1.4rem] outline-none"
              />

              <FaRegUser className="absolute left-6 top-8 text-2xl xs:text-[2.2rem] text-[#ccc]" />
            </div>
            <div className=" relative">
              <Inputs
                type="text"
                id="phone"
                placeholder="شماره تلفن"
                mainElement="input"
                validation={[requiredValidator(), phoneValidator()]}
                onInputHandler={onInputHandler}
                className="w-full border border-solid border-[#e6e6e6] py-4 px-[1.1rem] shadow-[0_1px_3px_0_rgba(0,0,0,0.06)] my-[0.8rem] mx-0 rounded text-sm xs:text-[1.4rem] outline-none"
              />

              <MdOutlinePhone className="absolute left-6 top-8 text-2xl xs:text-[2.2rem] text-[#ccc]" />
            </div>
            <div className=" relative">
              <Inputs
                type="text"
                id="username"
                placeholder="نام کاربری"
                mainElement="input"
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
                className="w-full border border-solid border-[#e6e6e6] py-4 px-[1.1rem] shadow-[0_1px_3px_0_rgba(0,0,0,0.06)] my-[0.8rem] mx-0 rounded text-sm xs:text-[1.4rem] outline-none"
              />

              <FaRegUser className="absolute left-6 top-8 text-2xl xs:text-[2.2rem] text-[#ccc]" />
            </div>
            <div className=" relative">
              <Inputs
                type="text"
                id="email"
                placeholder="ادرس ایمیل"
                mainElement="input"
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                  emailValidator(),
                ]}
                onInputHandler={onInputHandler}
                className="w-full border border-solid border-[#e6e6e6] py-4 px-[1.1rem] shadow-[0_1px_3px_0_rgba(0,0,0,0.06)] my-[0.8rem] mx-0 rounded text-sm xs:text-[1.4rem] outline-none"
              />
              <MdOutlineEmail className="absolute left-6 top-8 text-2xl xs:text-[2.2rem] text-[#ccc]" />
            </div>
            <div className=" relative">
              <Inputs
                type="text"
                id="password"
                placeholder="رمز عبور"
                mainElement="input"
                className="w-full border border-solid border-[#e6e6e6] py-4 px-[1.1rem] shadow-[0_1px_3px_0_rgba(0,0,0,0.06)] my-[0.8rem] mx-0 rounded text-sm xs:text-[1.4rem] outline-none"
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
              />
              <RiLockPasswordLine className="absolute left-6 top-8 text-2xl xs:text-[2.2rem] text-[#ccc]" />
            </div>
            <div className=" relative">
              <Inputs
                type="text"
                id="confirmPassword"
                placeholder=" تکرار رمز عبور "
                mainElement="input"
                className="w-full border border-solid border-[#e6e6e6] py-4 px-[1.1rem] shadow-[0_1px_3px_0_rgba(0,0,0,0.06)] my-[0.8rem] mx-0 rounded text-sm xs:text-[1.4rem] outline-none"
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
              />
              <RiLockPasswordLine className="absolute left-6 top-8 text-2xl xs:text-[2.2rem] text-[#ccc]" />
            </div>
            <Button
              className=" w-full border-none rounded py-[1.2rem] px-0 mt-1.5 flex items-center bg-[#2bce56] relative disabled:bg-red-400"
              type="submit"
              onClick={userRegister}
              disabled={!formState.isFormValid}
            >
              <CiLogin className=" text-white text-2xl absolute right-4" />
              <span className="l text-white my-0 mx-auto text-xl">ثبت‌نام</span>
            </Button>
            <div className=" flex justify-between items-center my-4 mx-0">
              <label className=" flex items-center">
                <input className=" ml-2" type="checkbox" />
                <span className=" text-[#6c757d] text-sm">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label>
                <a className=" text-[#7b868a] text-[1rem]" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
          <div className=" mt-12 text-[#7b868a] text-lg w-full">
            <span className="">سلام کاربر محترم:</span>
            <ul className=" mr-8 mt-4">
              <li>
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li>
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li>لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainRegister;
