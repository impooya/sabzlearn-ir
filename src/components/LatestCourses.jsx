import { FaArrowLeftLong } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function LatestCourses() {
  async function getCoursesDatasResponse() {
    const getCourse = await axios.get("http://localhost:4000/v1/courses");
    const courseData = await getCourse.data;
    return courseData;
  }
  getCoursesDatasResponse();
  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getCoursesDatasResponse,
  });
  return (
    <>
      <section className="mx-0 my-7 md:my-16">
        <div className="container">
          <div className="flex items-center justify-between mb-7">
            <div className="flex flex-col items-start justify-between">
              <span className="text-lg md:text-[1.3rem] text-[#444446] pr-2 font-bold leading-[1.2] relative before:content-[''] md:before:block before:absolute before:bg-green-primery before:h-[3rem] before:w-1 before:rounded-md  before:-right-1 before:hidden before:rotate-12 after:content-[''] after:block after:w-44 md:after:w-60 after:h-4 after:absolute after:bg-green-primery/20 after:bottom-0 top-0 ">
                جدیدترین دوره ها
              </span>
              <span className="text-[#9c9c9c] md:text-xl pr-2 text-sm">
                سکوی پرتاپ شما به سمت موفقیت
              </span>
            </div>
            <div>
              <Link
                to="/courses/1"
                className="flex items-center justify-center text-white bg-green-primery text-xs py-1 px-1 md:text-lg md:px-4 md:py-2 rounded-lg hover:text-white gap-x-2"
              >
                تمامی دوره ها
                <FaArrowLeftLong className="md:block hidden" />
              </Link>
            </div>
          </div>

          <section className="w-full text-dark-primery ">
            <div className="container">
              {isLoading ? (
                <span>در حال بارگذاری...</span>
              ) : isError ? (
                <span>خطا در بارگذاری اطلاعات</span>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {courses?.splice(0, 6).map((course) => (
                    <div
                      key={course._id}
                      className="shadow-2xl rounded-2xl w-full  hover:-translate-y-2 transition-all easear duration-[400ms]"
                    >
                      <div className="flex flex-col justify-center items-start gap-y-4 w-full">
                        <Link
                          to={`course-info/${course.shortName}`}
                          className="block w-full"
                        >
                          <img
                            src={`http://localhost:4000/courses/covers/${course.cover}`}
                            alt="Course img"
                            className="bg-cover rounded-t-2xl w-full"
                          />
                        </Link>
                        <div className="flex flex-col justify-center items-start px-4 gap-4 w-full">
                          <Link
                            to={`course-info/${course.shortName}`}
                            className="hover:text-blue-600 transition-all delay-100"
                          >
                            {course.name}
                          </Link>

                          <div className="flex justify-between items-center w-full">
                            <div className="flex justify-center items-center gap-x-1 text-sm text-[#6c757d] ">
                              <FaChalkboardTeacher className="text-2xl" />
                              <a
                                href="#"
                                className="hover:text-blue-600 transition-all delay-75"
                              >
                                {course.creator}
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
                              <span className="course-box__users-text">
                                {course.registers}
                              </span>
                            </div>
                            <span className="course-box__price text-lg">
                              {course.price === 0
                                ? "رایگان"
                                : course.price.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        <div className="course-box__footer w-full justify-center items-center flex py-6 border-t-2">
                          <Link
                            to={`course-info/${course.shortName}`}
                            className="inline-flex justify-center items-center gap-x-2 text-green-primery font-IRANSansBold "
                          >
                            مشاهده اطلاعات
                            <FaArrowLeftLong />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default LatestCourses;
