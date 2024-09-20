import { FaArrowLeftLong } from "react-icons/fa6";
function Courses() {
  return (
    <>
      <section className="mx-0 my-16">
        <div className="container">
          <div className="flex items-center justify-between mb-20">
            <div className="flex flex-col items-start justify-between">
              <span className="text-[1.3rem] text-[#444446] pr-2 font-bold leading-[1.2] relative before:content-['']  before:absolute before:bg-green-primery before:h-[4.4rem] before:w-1 before:rounded-md  before:-right-1 before:block before:rotate-12 after:content-[''] after:block after:w-60 after:h-4 after:absolute after:bg-green-primery/20 after:bottom-0 top-0 ">
                جدیدترین دوره ها
              </span>
              <span className="text-[#9c9c9c] text-xl pr-2 ">
                سکوی پرتاپ شما به سمت موفقیت
              </span>
            </div>
            <div className="courses-header__left">
              <a
                href="#"
                className="flex items-center justify-center text-white bg-green-primery px-4 py-2 rounded-lg hover:text-white gap-x-2"
              >
                تمامی دوره ها
                <FaArrowLeftLong />
              </a>
            </div>
          </div>

          <div className="courses-content">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div className="course-box">
                    <a href="#">
                      <img
                        src="images/courses/fareelancer.png"
                        alt="Course img"
                        className="course-box__img"
                      />
                    </a>
                    <div className="course-box__main">
                      <a href="#" className="course-box__title">
                        دوره پروژه محور متخصص جنگو
                      </a>

                      <div className="course-box__rating-teacher">
                        <div className="course-box__teacher">
                          <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                          <a href="#" className="course-box__teacher-link">
                            رضا دولتی
                          </a>
                        </div>
                        <div className="course-box__rating">
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

                      <div className="course-box__status">
                        <div className="course-box__users">
                          <i className="fas fa-users course-box__users-icon"></i>
                          <span className="course-box__users-text">500</span>
                        </div>
                        <span className="course-box__price">1,000,000</span>
                      </div>
                    </div>

                    <div className="course-box__footer">
                      <a href="#" className="course-box__footer-link">
                        مشاهده اطلاعات
                        <i className="fas fa-arrow-left course-box__footer-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="course-box">
                    <a href="#">
                      <img
                        src="images/courses/jango.png"
                        alt="Course img"
                        className="course-box__img"
                      />
                    </a>
                    <div className="course-box__main">
                      <a href="#" className="course-box__title">
                        دوره پروژه محور متخصص جنگو
                      </a>

                      <div className="course-box__rating-teacher">
                        <div className="course-box__teacher">
                          <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                          <a href="#" className="course-box__teacher-link">
                            رضا دولتی
                          </a>
                        </div>
                        <div className="course-box__rating">
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

                      <div className="course-box__status">
                        <div className="course-box__users">
                          <i className="fas fa-users course-box__users-icon"></i>
                          <span className="course-box__users-text">500</span>
                        </div>
                        <span className="course-box__price">1,000,000</span>
                      </div>
                    </div>

                    <div className="course-box__footer">
                      <a href="#" className="course-box__footer-link">
                        مشاهده اطلاعات
                        <i className="fas fa-arrow-left course-box__footer-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="course-box">
                    <a href="#">
                      <img
                        src="images/courses/js_project.png"
                        alt="Course img"
                        className="course-box__img"
                      />
                    </a>
                    <div className="course-box__main">
                      <a href="#" className="course-box__title">
                        دوره پروژه محور متخصص جنگو
                      </a>

                      <div className="course-box__rating-teacher">
                        <div className="course-box__teacher">
                          <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                          <a href="#" className="course-box__teacher-link">
                            رضا دولتی
                          </a>
                        </div>
                        <div className="course-box__rating">
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

                      <div className="course-box__status">
                        <div className="course-box__users">
                          <i className="fas fa-users course-box__users-icon"></i>
                          <span className="course-box__users-text">500</span>
                        </div>
                        <span className="course-box__price">1,000,000</span>
                      </div>
                    </div>

                    <div className="course-box__footer">
                      <a href="#" className="course-box__footer-link">
                        مشاهده اطلاعات
                        <i className="fas fa-arrow-left course-box__footer-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="course-box">
                    <a href="#">
                      <img
                        src="images/courses/youtuber.png"
                        alt="Course img"
                        className="course-box__img"
                      />
                    </a>
                    <div className="course-box__main">
                      <a href="#" className="course-box__title">
                        دوره پروژه محور متخصص جنگو
                      </a>

                      <div className="course-box__rating-teacher">
                        <div className="course-box__teacher">
                          <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                          <a href="#" className="course-box__teacher-link">
                            رضا دولتی
                          </a>
                        </div>
                        <div className="course-box__rating">
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

                      <div className="course-box__status">
                        <div className="course-box__users">
                          <i className="fas fa-users course-box__users-icon"></i>
                          <span className="course-box__users-text">500</span>
                        </div>
                        <span className="course-box__price">1,000,000</span>
                      </div>
                    </div>

                    <div className="course-box__footer">
                      <a href="#" className="course-box__footer-link">
                        مشاهده اطلاعات
                        <i className="fas fa-arrow-left course-box__footer-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="course-box">
                    <a href="#">
                      <img
                        src="images/courses/python.png"
                        alt="Course img"
                        className="course-box__img"
                      />
                    </a>
                    <div className="course-box__main">
                      <a href="#" className="course-box__title">
                        دوره پروژه محور متخصص جنگو
                      </a>

                      <div className="course-box__rating-teacher">
                        <div className="course-box__teacher">
                          <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                          <a href="#" className="course-box__teacher-link">
                            رضا دولتی
                          </a>
                        </div>
                        <div className="course-box__rating">
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

                      <div className="course-box__status">
                        <div className="course-box__users">
                          <i className="fas fa-users course-box__users-icon"></i>
                          <span className="course-box__users-text">500</span>
                        </div>
                        <span className="course-box__price">1,000,000</span>
                      </div>
                    </div>

                    <div className="course-box__footer">
                      <a href="#" className="course-box__footer-link">
                        مشاهده اطلاعات
                        <i className="fas fa-arrow-left course-box__footer-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="course-box">
                    <a href="#">
                      <img
                        src="images/courses/nodejs.png"
                        alt="Course img"
                        className="course-box__img"
                      />
                    </a>
                    <div className="course-box__main">
                      <a href="#" className="course-box__title">
                        دوره پروژه محور متخصص جنگو
                      </a>

                      <div className="course-box__rating-teacher">
                        <div className="course-box__teacher">
                          <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                          <a href="#" className="course-box__teacher-link">
                            رضا دولتی
                          </a>
                        </div>
                        <div className="course-box__rating">
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

                      <div className="course-box__status">
                        <div className="course-box__users">
                          <i className="fas fa-users course-box__users-icon"></i>
                          <span className="course-box__users-text">500</span>
                        </div>
                        <span className="course-box__price">1,000,000</span>
                      </div>
                    </div>

                    <div className="course-box__footer">
                      <a href="#" className="course-box__footer-link">
                        مشاهده اطلاعات
                        <i className="fas fa-arrow-left course-box__footer-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
