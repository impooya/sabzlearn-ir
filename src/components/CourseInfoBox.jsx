import { FaClock, FaGraduationCap, FaPlay, FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaCircleInfo } from "react-icons/fa6";
import { useContext } from "react";
import { singleCourseDataContext } from "../contexts/getSingleCourseData";

function CourseInfoBox() {
  const getSingleCourseDataConfig = useContext(singleCourseDataContext);

  return (
    <>
      <div className="course-boxes">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3">
          <div>
            <div className="course-boxes__bo flex rounded-lg py-6 px-7 shadow-[0_5px_30px_rgba(70,72,77,0.08)] my-3 ">
              <div className="course-boxes__box-right flex justify-center items-center ">
                <FaGraduationCap className="text-5xl text-green-primery" />
              </div>
              <div className="course-boxes__box-left  flex flex-col mr-5 text-lg text-[#858c96]">
                <span className="course-boxes__box-left-title">
                  وضعیت دوره:
                </span>
                <span className="course-boxes__box-left--subtitle text-[#7d7e7f]">
                  {getSingleCourseDataConfig.data?.isComplete === 1
                    ? "به اتمام رسیده"
                    : "در حال برگزاری..."}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="course-boxes__box flex rounded-lg py-6 px-7 shadow-[0_5px_30px_rgba(70,72,77,0.08)] my-3  ">
              <div className="course-boxes__box-right flex justify-center items-center ">
                <FaClock className="text-5xl text-green-primery" />
              </div>
              <div className="course-boxes__box-left flex flex-col mr-5 text-lg text-[#858c96]">
                <span className="course-boxes__box-left-title">
                  مدت زمان دوره:
                </span>
                <span className="course-boxes__box-left--subtitle text-[#7d7e7f]">
                  12 ساعت
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="course-boxes__box flex rounded-lg py-6 px-7 shadow-[0_5px_30px_rgba(70,72,77,0.08)] my-3  ">
              <div className="course-boxes__box-right flex justify-center items-center ">
                <SlCalender className="text-5xl text-green-primery" />
              </div>
              <div className="course-boxes__box-left flex flex-col mr-5 text-lg text-[#858c96]">
                <span className="course-boxes__box-left-title">
                  آخرین بروزرسانی:
                </span>
                <span className="course-boxes__box-left--subtitle text-[#7d7e7f]">
                  {getSingleCourseDataConfig.localIranTime}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="course-boxes__box flex rounded-lg py-6 px-7 shadow-[0_5px_30px_rgba(70,72,77,0.08)] my-3  ">
              <div className="course-boxes__box-right flex justify-center items-center ">
                <FaUser className="text-5xl text-green-primery " />
              </div>
              <div className="course-boxes__box-left flex flex-col mr-5 text-lg text-[#858c96]">
                <span className="course-boxes__box-left-title">
                  روش پشتیبانی
                </span>
                <span className="course-boxes__box-left--subtitle text-[#7d7e7f]">
                  {getSingleCourseDataConfig.data?.support}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="course-boxes__box flex rounded-lg py-6 px-7 shadow-[0_5px_30px_rgba(70,72,77,0.08)] my-3  ">
              <div className="course-boxes__box-right flex justify-center items-center ">
                <FaCircleInfo className="text-5xl text-green-primery " />
              </div>
              <div className="course-boxes__box-left flex flex-col mr-5 text-lg text-[#858c96]">
                <span className="course-boxes__box-left-title">پیش نیاز:</span>
                <span className="course-boxes__box-left--subtitle text-[#7d7e7f]">
                  HTML CSS
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="course-boxes__box flex rounded-lg py-6 px-7 shadow-[0_5px_30px_rgba(70,72,77,0.08)] my-3  ">
              <div className="course-boxes__box-right flex justify-center items-center ">
                <FaPlay className="text-5xl text-green-primery " />
              </div>
              <div className="course-boxes__box-left flex flex-col mr-5 text-lg text-[#858c96]">
                <span className="course-boxes__box-left-title">
                  نوع مشاهده:
                </span>
                <span className="course-boxes__box-left--subtitle">
                  ضبط شده / آنلاین
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseInfoBox;
