import { IoMdHome } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
function BreadCrump() {
  return (
    <>
      <section className="mt-8 hidden md:block">
        <div className="container">
          <div className="flex bg-[#f0f2f7] py-6 px-8 rounded-2xl">
            <div className="breadcrumb__home-content-icon flex items-center justify-center size-12 bg-white rounded-2xl">
              <IoMdHome className="text-xl text-[#909aa7]" />
            </div>
            <ul className="flex items-center mr-6">
              <li className="breadcrumb__item list-none">
                <a
                  href="#"
                  className="breadcrumb__link flex items-center text-lg text-[#7f8187] hover:text-[#7f8187]"
                >
                  خانه
                  <FaChevronLeft className="text-[#7f8187] text-2xl mx-2" />
                </a>
              </li>
              <li className="breadcrumb__item list-none">
                <a
                  href="#"
                  className="breadcrumb__link flex items-center text-lg text-[#7f8187] hover:text-[#7f8187]"
                >
                  آموزش برنامه نویسی فرانت اند
                  <FaChevronLeft className="text-[#7f8187] text-2xl mx-2" />
                </a>
              </li>
              <li className="breadcrumb__item list-none">
                <a
                  href="#"
                  className="breadcrumb__link flex items-center text-lg text-[#7f8187] hover:text-[#7f8187]"
                >
                  دوره متخصص جاوا اسکریپت
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default BreadCrump;
