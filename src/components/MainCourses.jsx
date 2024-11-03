import { FaArrowLeftLong } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { useState } from "react";

function MainCourses() {
  const [shownCourses, setShownCourses] = useState([]);
  const getAllCoursesResponse = async () => {
    const coursesRes = await axios.get("http://localhost:4000/v1/courses");
    const coursesData = await coursesRes.data;
    return coursesData;
  };
  const { data: courses } = useQuery({
    queryKey: ["all-course"],
    queryFn: getAllCoursesResponse,
  });
  return (
    <>
      <section className="mx-0 my-7 md:my-16">
        <div className="container">
          <section className="w-full text-dark-primery ">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {shownCourses?.map((course) => (
                  <div
                    key={course._id}
                    className="shadow-2xl rounded-2xl w-full  hover:-translate-y-2 transition-all easear duration-[400ms]"
                  >
                    <div className="flex flex-col justify-center items-start gap-y-4 w-full">
                      <Link
                        to={`/course-info/${course.shortName}`}
                        className="block w-full"
                      >
                        <img
                          src="/images/courses/python.png"
                          alt="Course img"
                          className="bg-cover rounded-t-2xl w-full"
                        />
                      </Link>
                      <div className="flex flex-col justify-center items-start px-4 gap-4 w-full">
                        <Link
                          to={`/course-info/${course.shortName}`}
                          className="hover:text-blue-600 transition-all delay-100"
                        >
                          {course.name}
                        </Link>

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
                            <FaUsers />
                            <span className="course-box__users-text">
                              {course.registers}
                            </span>
                          </div>
                          <span className="text-lg">
                            {course.price === 0
                              ? "رایگان"
                              : course.price.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="w-full justify-center items-center flex py-6 border-t-2">
                        <Link
                          to={`/course-info/${course.shortName}`}
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
            </div>
          </section>
          <Pagination
            items={courses || []}
            itemsCount={3}
            pathname="/courses"
            setShownCourses={setShownCourses}
          />
        </div>
      </section>
    </>
  );
}

export default MainCourses;
