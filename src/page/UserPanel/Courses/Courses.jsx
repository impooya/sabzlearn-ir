import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import "./Courses.css";
import { useEffect, useState } from "react";
function Courses() {
  const queryClient = useQueryClient();
  const [showCourseState, setShowCourseState] = useState("all");
  const [shownCourses, setShownCourses] = useState([]);

  const { data: courses } = useQuery({
    queryKey: ["course-user-panel"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/v1/users/courses", {
        headers: {
          Authorization: `Beare ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      });
      const data = await res.data;
      return data;
    },
  });

  useEffect(() => {
    setShownCourses(queryClient.getQueryData(["course-user-panel"]));
  }, [queryClient, courses]);

  const filterCourses = (state) => {
    switch (state) {
      case "all": {
        setShownCourses(queryClient.getQueryData(["course-user-panel"]));
        break;
      }
      case "free": {
        queryClient.setQueryData(["course-user-panel"], (oldCourse) => {
          const newData = oldCourse.filter((course) => {
            return course.course?.price === 0;
          });
          setShownCourses(newData);
        });
        break;
      }
      case "money": {
        queryClient.setQueryData(["course-user-panel"], (oldCourse) => {
          const newData = oldCourse.filter((course) => {
            return course.course?.price !== 0;
          });
          setShownCourses(newData);
        });
        break;
      }
      default: {
        setShownCourses(queryClient.getQueryData(["course-user-panel"]));
      }
    }
  };

  return (
    <>
      <div className="col-9">
        <div className="courses">
          <div className="courses-header">
            <span className="courses-header__title">دوره های ثبت نام شده</span>
            <ul className="courses-header__list">
              <li className="courses-header__item">
                <a
                  href="#"
                  className={`courses-header__link__panel ${
                    showCourseState === "all"
                      ? "courses-header__link-active"
                      : null
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    setShowCourseState("all");
                    filterCourses("all");
                  }}
                >
                  همه دوره ها
                </a>
              </li>
              <li
                className="courses-header__item"
                onClick={(event) => {
                  event.preventDefault();
                  setShowCourseState("free");
                  filterCourses("free");
                }}
              >
                <a
                  className={`courses-header__link__panel ${
                    showCourseState === "free"
                      ? "courses-header__link-active"
                      : null
                  }`}
                  href="#"
                >
                  دوره های رایگان
                </a>
              </li>
              <li
                className="courses-header__item"
                onClick={(event) => {
                  event.preventDefault();
                  setShowCourseState("money");
                  filterCourses("money");
                }}
              >
                <a
                  className={`courses-header__link__panel ${
                    showCourseState === "money"
                      ? "courses-header__link-active"
                      : null
                  }`}
                  href="#"
                >
                  دوره های پولی
                </a>
              </li>
            </ul>
          </div>
          <div className="main">
            <div className="row">
              <div className="col-12">
                {shownCourses?.length === 0 ? (
                  <span>دوره ای یافت نشد</span>
                ) : (
                  shownCourses?.map((course) => (
                    <div key={course._id} className="main__box">
                      <div className="main__box-right">
                        <a className="main__box-img-link" href="#">
                          <img
                            className="main__box-img img-fluid"
                            src={`http://localhost:4000/courses/covers/${course.course?.cover}`}
                          />
                        </a>
                      </div>
                      <div className="main__box-left">
                        <a href="#" className="main__box-title">
                          {course.course?.name}
                        </a>
                        <div className="main__box-bottom">
                          <div className="main__box-all">
                            <span className="main__box-all-text">وضعیت:</span>
                            <span className="main__box-all-value">
                              {course.course?.isComplete === 1
                                ? "تکمیل شده"
                                : "در حال برگزاری"}
                            </span>
                          </div>
                          <div className="main__box-completed">
                            <span className="main__box-completed-text">
                              مبلغ:
                            </span>
                            <span className="main__box-completed-value">
                              {course.course?.price === 0
                                ? "رایگان"
                                : course.course?.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
