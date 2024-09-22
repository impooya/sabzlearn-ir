import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
function PopulerCourses() {
  return (
    <>
      <div className="mx-0 my-7 md:my-16">
        <div className="container">
          <div className="w-full mb-7 flex justify-center items-center flex-col">
            <span className="text-lg md:text-[1.3rem] w-full text-[#444446] pr-2 font-bold leading-[1.2] relative before:content-[''] md:before:block before:absolute before:bg-green-primery before:h-[3rem] before:w-1 before:rounded-md  before:-right-1 before:hidden before:rotate-12 after:content-[''] after:block after:w-full after:h-4 after:absolute after:bg-green-primery/20 after:bottom-0 top-0 ">
              ما چه کمکی بهتون میکنیم؟
            </span>
          </div>
          <div className="container">
            <Swiper
              dir="rtl"
              effect={"coverFlow"}
              grabCursor={true}
              modules={[Pagination, Autoplay]}
              spaceBetween={14}
              className="w-full h-[430px]"
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <div className="shadow-md rounded-2xl w-full  ">
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="shadow-md rounded-2xl w-full  ">
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="shadow-md rounded-2xl w-full  ">
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="shadow-md rounded-2xl w-full  ">
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="shadow-md rounded-2xl w-full  ">
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="shadow-md rounded-2xl w-full  ">
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopulerCourses;
