import { FaAngleLeft } from "react-icons/fa";
function QuickAccess() {
  return (
    <>
      <div className="shadow-[0_0_13px_1px_rgba(70,72,77,0.08)] border mt-3 lg:mt-3  p-5 rounded-lg border-solid border-[#f2f2f2] ">
        <span className="text-sm lg:text-xl block text-dark-primery mb-5">
          دسترسی سریع
        </span>
        <ul className="mt-1">
          <li className=" flex items-center border-b border-solid border-b-[#eeeeee] transition-all duration-500 ease-in-out hover:pr-8 hover:bg-[#f8f9fa] hover:text-green-primery py-[0.9rem] pl-[1.3rem] pr-4 text-[#909aa7]">
            <FaAngleLeft className="hover:text-green-primery" />
            <a href="#" className="text-lg mr-2">
              صفحه اصلی
            </a>
          </li>
          <li className=" flex items-center border-b border-solid border-b-[#eeeeee] transition-all duration-500 ease-in-out hover:pr-8 hover:bg-[#f8f9fa] hover:text-green-primery py-[0.9rem] pl-[1.3rem] pr-4 text-[#909aa7]">
            <FaAngleLeft className="hover:text-green-primery" />
            <a href="#" className="text-lg mr-2">
              فرانت اند
            </a>
          </li>
          <li className=" flex items-center border-b border-solid border-b-[#eeeeee] transition-all duration-500 ease-in-out hover:pr-8 hover:bg-[#f8f9fa] hover:text-green-primery py-[0.9rem] pl-[1.3rem] pr-4 text-[#909aa7]">
            <FaAngleLeft className="hover:text-green-primery" />
            <a href="#" className="text-lg mr-2">
              امنیت
            </a>
          </li>
          <li className=" flex items-center border-b border-solid border-b-[#eeeeee] transition-all duration-500 ease-in-out hover:pr-8 hover:bg-[#f8f9fa] hover:text-green-primery py-[0.9rem] pl-[1.3rem] pr-4 text-[#909aa7]">
            <FaAngleLeft className="hover:text-green-primery" />
            <a href="#" className="text-lg mr-2">
              پایتون
            </a>
          </li>
          <li className=" flex items-center border-b border-solid border-b-[#eeeeee] transition-all duration-500 ease-in-out hover:pr-8 hover:bg-[#f8f9fa] hover:text-green-primery py-[0.9rem] pl-[1.3rem] pr-4 text-[#909aa7]">
            <FaAngleLeft className="hover:text-green-primery" />
            <a href="#" className="text-lg mr-2">
              مهارت های نرم
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default QuickAccess;
