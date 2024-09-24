import {
  FaAlignLeft,
  FaBorderAll,
  FaChalkboardTeacher,
  FaChevronDown,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaSearch,
  FaUsers,
} from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoReorderFour } from "react-icons/io5";

function Category() {
  return (
    <>
      <section className="courses">
        <div className="container">
          <div className="courses-top-bar flex-col md:flex-row gap-y-4 flex justify-between items-center p-8 shadow-lg ">
            <div className="courses-top-bar__right flex items-center">
              <div className="courses-top-bar__row-btn  py-3 px-4 flex items-center justify-center w-16 h-14 rounded-md text-black cursor-pointer border border-[#e5e5e5] ml-4 child:text-2xl active:text-white active:bg-[#1e83f0]">
                <FaBorderAll />
              </div>
              <div className="courses-top-bar__column-btn py-3 px-4 flex items-center justify-center w-16 h-14 rounded-md text-black cursor-pointer border border-[#e5e5e5] ml-4 child:text-2xl">
                <FaAlignLeft />
              </div>

              <div className="courses-top-bar__selection cursor-pointer relative group">
                <span className="courses-top-bar__selection-title hidden md:flex items-center justify-center gap-x-2 h-14 rounded-md py-3 px-8 border border-solid border-[#e5e5e5] text-[#7d7e7f] hover:text-white hover:bg-[#1e83f0] transition-all duration-300 ease-out delay-100 ">
                  مرتب سازی پیش فرض
                  <FaChevronDown />
                </span>
                <div className="courses-top-bar__row-btn  py-3 px-4 flex md:hidden items-center justify-center w-16 h-14 rounded-md text-black cursor-pointer border border-[#e5e5e5] ml-4 child:text-2xl hover:text-white hover:bg-[#1e83f0] transition-all duration-300 ease-out ">
                  <IoReorderFour />
                </div>
                <ul className="courses-top-bar__selection-list md:block hidden  opacity-0 invisible absolute shadow-md bg-white w-full py-3 rounded-bl rounded-br border-b-4 border-solid border-b-green-primery z-[9999] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:visible">
                  <li className="courses-top-bar__selection-item courses-top-bar__selection-item--active text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100">
                    مرتب سازی پیش فرض
                  </li>
                  <li className="courses-top-bar__selection-item text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100">
                    مرتب سازی بر اساس محبوبیت
                  </li>
                  <li className="courses-top-bar__selection-item text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100">
                    مرتب سازی بر اساس امتیاز
                  </li>
                  <li className="courses-top-bar__selection-item text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100">
                    مرتب سازی بر اساس آخرین
                  </li>
                  <li className="courses-top-bar__selection-item text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100">
                    مرتب سازی بر اساس ارزان ترین
                  </li>
                  <li className="courses-top-bar__selection-item text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100">
                    مرتب سازی بر اساس گران ترین
                  </li>
                </ul>
              </div>
            </div>

            <div className="courses-top-bar__left">
              <form
                action="#"
                className="courses-top-bar__form relative 4xs:w-40  md:w-[15rem] lg:w-[25rem] flex justify-center items-center"
              >
                <input
                  type="text"
                  className="text-lg w-full border border-solid border-[#dcdcdc] pl-9 py-2 pr-3"
                  placeholder="جستجوی دوره ..."
                />
                <button className="absolute left-4 top-4 text-[#7d7e7f] text-xl cursor-pointer ">
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>

          <section className="mt-6">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="shadow-2xl rounded-2xl w-full  hover:-translate-y-2 transition-all easear duration-[400ms]">
                  <div className="flex flex-col justify-center items-start gap-y-4 w-full">
                    <a href="#" className="block w-full">
                      <img
                        src="/images/courses/fareelancer.png"
                        alt="Course img"
                        className="bg-cover rounded-t-2xl w-full"
                      />
                    </a>
                    <div className="flex flex-col justify-center items-start px-4 gap-4 w-full">
                      <a
                        href="#"
                        className="hover:text-blue-600 transition-all delay-100"
                      >
                        دوره پروژه محور متخصص جنگو
                      </a>

                      <div className="flex justify-between items-center w-full">
                        <div className="flex justify-center items-center gap-x-1 text-sm text-[#6c757d] ">
                          <FaChalkboardTeacher className="text-2xl" />
                          <a
                            href="#"
                            className="hover:text-blue-600 transition-all delay-75"
                          >
                            رضا دولتی
                          </a>
                        </div>
                        <div className="course-box__rating flex justify-center items-center child:w-4">
                          <img
                            src="/images/svgs/star.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="/images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="/images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="/images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="/images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                        </div>
                      </div>

                      <div className=" text-[#6c757d] flex justify-between w-full items-center">
                        <div className="course-box__users text-sm flex justify-center items-center gap-x-1">
                          <FaUsers className="text-2xl" />
                          <span className="course-box__users-text">500</span>
                        </div>
                        <span className="course-box__price text-lg">
                          1,000,000
                        </span>
                      </div>
                    </div>

                    <div className="course-box__footer w-full justify-center items-center flex py-6 border-t-2">
                      <a
                        href="#"
                        className="inline-flex justify-center items-center gap-x-2 text-green-primery font-IRANSansBold "
                      >
                        مشاهده اطلاعات
                        <FaArrowLeftLong />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="shadow-2xl rounded-2xl w-full  hover:-translate-y-2 transition-all easear duration-[400ms]">
                  <div className="flex flex-col justify-center items-start gap-y-4 w-full">
                    <a href="#" className="block w-full">
                      <img
                        src="/images/courses/jango.png"
                        alt="Course img"
                        className="bg-cover rounded-t-2xl w-full"
                      />
                    </a>
                    <div className="flex flex-col justify-center items-start px-4 gap-4 w-full">
                      <a
                        href="#"
                        className="hover:text-blue-600 transition-all delay-100"
                      >
                        دوره پروژه محور متخصص جنگو
                      </a>

                      <div className=" flex justify-between items-center w-full">
                        <div className="flex justify-center items-center gap-x-1 text-sm text-[#6c757d] ">
                          <FaChalkboardTeacher className="text-2xl" />
                          <a
                            href="#"
                            className="hover:text-blue-600 transition-all delay-75"
                          >
                            رضا دولتی
                          </a>
                        </div>
                        <div className="flex justify-center items-center child:w-4">
                          <img
                            src="/images/svgs/star.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="/images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="/images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="/images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="/images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                        </div>
                      </div>

                      <div className="text-[#6c757d] flex justify-between w-full items-center">
                        <div className="text-sm flex justify-center items-center gap-x-1">
                          <i className="fas fa-users course-box__users-icon"></i>
                          <span className="course-box__users-text">500</span>
                        </div>
                        <span className="text-lg">1,000,000</span>
                      </div>
                    </div>

                    <div className="w-full justify-center items-center flex py-6 border-t-2">
                      <a
                        href="#"
                        className="inline-flex justify-center items-center gap-x-2 text-green-primery font-IRANSansBold "
                      >
                        مشاهده اطلاعات
                        <FaArrowLeftLong />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="shadow-2xl rounded-2xl w-full  hover:-translate-y-2 transition-all easear duration-[400ms]">
                  <div className="flex flex-col justify-center items-start gap-y-4 w-full">
                    <a href="#" className="block w-full">
                      <img
                        src="/images/courses/js_project.png"
                        alt="Course img"
                        className="bg-cover rounded-t-2xl w-full"
                      />
                    </a>
                    <div className="flex flex-col justify-center items-start px-4 gap-4 w-full">
                      <a
                        href="#"
                        className="hover:text-blue-600 transition-all delay-100"
                      >
                        دوره پروژه محور متخصص جنگو
                      </a>

                      <div className=" flex justify-between items-center w-full">
                        <div className="flex justify-center items-center gap-x-1 text-sm text-[#6c757d] ">
                          <FaChalkboardTeacher className="text-2xl" />
                          <a
                            href="#"
                            className="hover:text-blue-600 transition-all delay-75"
                          >
                            رضا دولتی
                          </a>
                        </div>
                        <div className="flex justify-center items-center child:w-4">
                          <img
                            src="/images/svgs/star.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="/images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="/images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="/images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="/images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                        </div>
                      </div>

                      <div className="text-[#6c757d] flex justify-between w-full items-center">
                        <div className="text-sm flex justify-center items-center gap-x-1">
                          <i className="fas fa-users course-box__users-icon"></i>
                          <span className="course-box__users-text">500</span>
                        </div>
                        <span className="text-lg">1,000,000</span>
                      </div>
                    </div>

                    <div className="w-full justify-center items-center flex py-6 border-t-2">
                      <a
                        href="#"
                        className="inline-flex justify-center items-center gap-x-2 text-green-primery font-IRANSansBold "
                      >
                        مشاهده اطلاعات
                        <FaArrowLeftLong />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="my-12">
            <ul className="flex items-center justify-center">
              <li className="courses__pagination-item">
                <a
                  href="#"
                  className="rounded-lg w-7 h-7 md:w-16 md:h-16 flex justify-center items-center text-md md:text-2xl bg-[#f0f0f1] mx-2"
                >
                  <FaLongArrowAltRight />
                </a>
              </li>
              <li className="courses__pagination-item">
                <a
                  href="#"
                  className="rounded-lg w-7 h-7 md:w-16 md:h-16 flex justify-center items-center text-md md:text-2xl bg-[#f0f0f1] mx-2"
                >
                  1
                </a>
              </li>
              <li className="courses__pagination-item">
                <a
                  href="#"
                  className="rounded-lg w-7 h-7 md:w-16 md:h-16 flex justify-center items-center text-md md:text-2xl bg-[#f0f0f1] mx-2"
                >
                  2
                </a>
              </li>
              <li className="courses__pagination-item  rounded-lg w-7 h-7 md:w-16 md:h-16 flex justify-center items-center text-md md:text-2xl bg-[#f0f0f1] mx-2">
                <a
                  href="#"
                  className="courses__pagination-link courses__pagination-link--active"
                >
                  3
                </a>
              </li>
              <li className="courses__pagination-item">
                <a
                  href="#"
                  className="courses__pagination-link  rounded-lg w-7 h-7 md:w-16 md:h-16 flex justify-center items-center text-md md:text-2xl bg-[#f0f0f1] mx-2"
                >
                  <FaLongArrowAltLeft />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
