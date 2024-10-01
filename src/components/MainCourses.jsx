import { FaArrowLeftLong } from "react-icons/fa6";
import {
  FaChalkboardTeacher,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
function MainCourses() {
  return (
    <>
      <section className="mx-0 my-7 md:my-16">
        <div className="container">
          <section className="w-full text-dark-primery ">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="shadow-2xl rounded-2xl w-full  hover:-translate-y-2 transition-all easear duration-[400ms]">
                  <div className="flex flex-col justify-center items-start gap-y-4 w-full">
                    <a href="#" className="block w-full">
                      <img
                        src="images/courses/fareelancer.png"
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
                            src="images/svgs/star.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
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
                        src="images/courses/jango.png"
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
                            src="images/svgs/star.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
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
                        src="images/courses/js_project.png"
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
                            src="images/svgs/star.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
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
                        src="images/courses/youtuber.png"
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
                            src="images/svgs/star.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
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
                        src="images/courses/python.png"
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
                            src="images/svgs/star.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                        </div>
                      </div>

                      <div className="text-[#6c757d] flex justify-between w-full items-center">
                        <div className="text-sm flex justify-center items-center gap-x-1">
                          <FaUsers />
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
                        src="images/courses/nodejs.png"
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
                            src="images/svgs/star.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
                            alt="rating"
                            className="course-box__star"
                          />
                          <img
                            src="images/svgs/star_fill.svg"
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

export default MainCourses;
