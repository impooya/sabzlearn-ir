import { useContext, useEffect, useState } from "react";
import {
  FaAlignLeft,
  FaBorderAll,
  FaChalkboardTeacher,
  FaChevronDown,
  FaSearch,
  FaUsers,
} from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoReorderFour } from "react-icons/io5";
import { CategoryContext } from "../contexts/CategorySideState";
import { WichSideBarContext } from "../contexts/WichSideBarState";
import { OverlayContext } from "../contexts/OverlayState";
import { ImageLoaderContext } from "../contexts/ImageLoader";
import ClipLoader from "react-spinners/ClipLoader";
import { Link, useParams } from "react-router-dom";
import Pagination from "./Pagination";
function Categories() {
  const categoryConfig = useContext(CategoryContext);
  const wichSideBarConfig = useContext(WichSideBarContext);
  const overlayConfig = useContext(OverlayContext);
  const imageLoaderConfig = useContext(ImageLoaderContext);
  const [courses, setCourses] = useState([]);
  const [orderedCourses, setOrderedCourses] = useState([]);
  const [status, setStatus] = useState("default");
  const { categoryName } = useParams();
  const [shownCourses, setShownCourses] = useState([]);
  const [statusTitle, setStatusTitle] = useState("مرتب سازی پیش فرض");
  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setCourses(result);
        setOrderedCourses(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  useEffect(() => {
    switch (status) {
      case "free": {
        const freeCourses = courses.filter((course) => course.price === 0);
        setOrderedCourses(freeCourses);
        break;
      }
      case "money": {
        const notFreeCourses = courses.filter((course) => course.price !== 0);
        setOrderedCourses(notFreeCourses);
        break;
      }

      case "last": {
        setOrderedCourses(courses);
        break;
      }
      case "first": {
        const reversedCourses = courses.slice().reverse();
        setOrderedCourses(reversedCourses);
        break;
      }
      case "cheap": {
        let cheapCourses = courses.slice().sort((x, y) => {
          return x.price - y.price;
        });
        setOrderedCourses(cheapCourses);
        break;
      }

      case "expensive": {
        let expensiveCourses = courses.slice().sort((x, y) => {
          return y.price - x.price;
        });
        setOrderedCourses(expensiveCourses);
        break;
      }

      default: {
        setOrderedCourses(courses);
      }
    }
  }, [status, courses]);

  const statusTitleChangeHandler = (event) => {
    setStatusTitle(event.target.textContent);
  };
  return (
    <>
      <section className="courses">
        <div className="container">
          {courses.length === 0 ? (
            <div
              className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>دوره مورد نظر یافت نشد</div>
            </div>
          ) : (
            <>
              <div className="courses-top-bar flex-col md:flex-row gap-y-4 flex justify-between items-center p-8 shadow-lg ">
                <div className="courses-top-bar__right flex items-center">
                  <div className="py-3 px-4 flex items-center justify-center w-16 h-14 rounded-md text-black cursor-pointer border border-[#e5e5e5] ml-4 child:text-2xl active:text-white active:bg-[#1e83f0]">
                    <FaBorderAll />
                  </div>
                  <div className="courses-top-bar__column-btn py-3 px-4 flex items-center justify-center w-16 h-14 rounded-md text-black cursor-pointer border border-[#e5e5e5] ml-4 child:text-2xl">
                    <FaAlignLeft />
                  </div>

                  <div className="courses-top-bar__selection cursor-pointer relative group">
                    <span className="courses-top-bar__selection-title hidden md:flex items-center justify-center gap-x-2 h-14 rounded-md py-3 px-8 border border-solid border-[#e5e5e5] text-[#7d7e7f] hover:text-white hover:bg-[#1e83f0] transition-all duration-300 ease-out delay-100 ">
                      {statusTitle}
                      <FaChevronDown />
                    </span>
                    <button
                      onClick={() => {
                        categoryConfig.openCategorySideHandler();
                        wichSideBarConfig.setWichSideBar("category-sidebar");
                        overlayConfig.setIsShowOverLay(true);
                      }}
                      className="py-3 px-4 flex md:hidden items-center justify-center w-16 h-14 rounded-md text-black cursor-pointer border border-[#e5e5e5] ml-4 child:text-2xl hover:text-white hover:bg-[#1e83f0] transition-all duration-300 ease-out "
                    >
                      <IoReorderFour />
                    </button>
                    <ul className="courses-top-bar__selection-list md:block hidden  opacity-0 invisible absolute shadow-md bg-white w-full py-3 rounded-bl rounded-br border-b-4 border-solid border-b-green-primery z-[9999] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:visible">
                      <li
                        onClick={(event) => {
                          setStatus("default");
                          statusTitleChangeHandler(event);
                        }}
                        className="courses-top-bar__selection-item courses-top-bar__selection-item--active text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100"
                      >
                        مرتب سازی پیش فرض
                      </li>
                      <li
                        onClick={(event) => {
                          setStatus("free");
                          statusTitleChangeHandler(event);
                        }}
                        className="courses-top-bar__selection-item text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100"
                      >
                        مرتب سازی بر اساس دوره های رایگان
                      </li>
                      <li
                        onClick={(event) => {
                          setStatus("money");
                          statusTitleChangeHandler(event);
                        }}
                        className="courses-top-bar__selection-item text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100"
                      >
                        مرتب سازی بر اساس دوره های پولی
                      </li>
                      <li
                        onClick={(event) => {
                          setStatus("last");
                          statusTitleChangeHandler(event);
                        }}
                        className="courses-top-bar__selection-item text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100"
                      >
                        مرتب سازی بر اساس آخرین
                      </li>
                      <li
                        onClick={(event) => {
                          setStatus("first");
                          statusTitleChangeHandler(event);
                        }}
                        className="courses-top-bar__selection-item text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100"
                      >
                        مرتب سازی بر اساس اولین
                      </li>
                      <li
                        onClick={(event) => {
                          setStatus("cheap");
                          statusTitleChangeHandler(event);
                        }}
                        className="courses-top-bar__selection-item text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100"
                      >
                        مرتب سازی بر اساس ارزان ترین
                      </li>
                      <li
                        onClick={(event) => {
                          setStatus("expensive");
                          statusTitleChangeHandler(event);
                        }}
                        className="courses-top-bar__selection-item text-[#5f5f5f] text-md py-3 px-5 hover:bg-[#ddd] transition-all duration-200 ease-in-out delay-100"
                      >
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
                              src="/images/courses/nodejs.png"
                              alt="Course img"
                              className="bg-cover rounded-t-2xl w-full"
                              onLoad={imageLoaderConfig.onImageLoaded}
                            />
                            {!imageLoaderConfig.isImgShow && (
                              <ClipLoader color="#1edb4d" />
                            )}
                          </Link>
                          <div className="flex flex-col justify-center items-start px-4 gap-4 w-full">
                            <Link
                              to={`/course-info/${course.shortName}`}
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
                items={orderedCourses}
                itemsCount={3}
                pathname={`/category-info/${categoryName}`}
                setShownCourses={setShownCourses}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Categories;
