import { FaGraduationCap } from "react-icons/fa";
import { singleCourseDataContext } from "../contexts/getSingleCourseData";
import { useContext } from "react";
function TopBanner() {
  const getSingleCourseDataConfig = useContext(singleCourseDataContext);
  return (
    <>
      <div className="shadow-[0_0_13px_1px_rgba(70,72,77,0.08)] border  lg:mt-3  p-5 rounded-lg border-solid border-[#f2f2f2]">
        <div className="course-info__register text-center bg-[#1fbd50] py-2 lg:py-3 px-2 rounded-lg shadow-[0_2px_12px_rgba(31,189,80,36%)]">
          <span className="course-info__register-title text-sm lg:text-xl text-white font-IRANSansBold flex justify-center items-center gap-x-2">
            {getSingleCourseDataConfig.data?.isUserRegisteredToThisCourse ? (
              <>
                <FaGraduationCap className="text-sm lg:text-2xl" />
                دانشجوی دوره هستید
              </>
            ) : (
              <span>ثبت نام در دوره</span>
            )}
          </span>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
