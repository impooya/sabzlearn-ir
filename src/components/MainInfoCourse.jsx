import { useContext, useEffect } from "react";
import { FaFacebook, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { singleCourseDataContext } from "../contexts/getSingleCourseData";

function MainInfoCourse() {
  const { courseName } = useParams();
  const getSingleCourseDataConfig = useContext(singleCourseDataContext);
  useEffect(() => {
    getSingleCourseDataConfig.setCourseName(courseName);
  });

  return (
    <>
      <section className="rounded-lg mt-4 p-8 shadow-shade-primery">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-7 lg:grid-cols-2 gap-x-32">
            <div className="">
              <a
                href="#"
                className="course-info__link text-sm xs:text-lg text-green-primery rounded py-1 px-3 bg-[rgba(43,206,86,0.2)]"
              >
                آموزش برنامه نویسی فرانت اند
              </a>
              <h1 className="course-info__title my-3 xs:my-6 font-IRANSansBold text-lg xs:text-2xl text-[#464749]">
                {getSingleCourseDataConfig.data?.name}
              </h1>
              <p className="course-info__text mb-4 xs:mb-10 text-sm xs:text-xl text-[#7b868a]">
                {getSingleCourseDataConfig.data?.description}
              </p>
              <div className="flex items-center ">
                <a
                  href="#"
                  className="course-info__social-media-item text-[#b1bbbf] ml-2 hover:text-[#1e83f0] transition-all duration-300 delay-100 ease-in-out text-xl xs:text-3xl"
                >
                  <FaTelegramPlane />
                </a>
                <a
                  href="#"
                  className="course-info__social-media-item text-[#b1bbbf] ml-2 hover:text-[#1e83f0] transition-all duration-300 delay-100 ease-in-out text-xl xs:text-3xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="course-info__social-media-item text-[#b1bbbf] ml-2 hover:text-[#1e83f0] transition-all duration-300 delay-100 ease-in-out text-xl xs:text-3xl"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>

            <div className="">
              <video
                src=""
                poster={`/images/courses/${getSingleCourseDataConfig.data?.cover}`}
                className=" w-full rounded-2xl"
                controls
              ></video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainInfoCourse;
