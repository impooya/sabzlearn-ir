import { FaRegComments, FaRegEye, FaUserGraduate } from "react-icons/fa";

function CourseStats() {
  return (
    <>
      <div className="shadow-[0_0_13px_1px_rgba(70,72,77,0.08)] border mt-3 lg:mt-3  p-5 rounded-lg border-solid border-[#f2f2f2]">
        <div className="course-info__total">
          <div className="flex items-center justify-center py-3 lg:p-5 rounded-2xl border-2 border-solid border-[#f0f2f7]">
            <div className="flex justify-center items-center gap-x-1 lg:gap-x-2">
              <FaUserGraduate className="text-[#555555] text-sm lg:text-3xl" />
              <span className="text-[#7f8187] text-sm lg:text-lg">
                تعداد دانشجو :
              </span>
              <span className="text-white bg-[#c4c7cf] rounded-lg text-sm lg:text-lg  lg:py-1 lg:px-4 ">
                178
              </span>
            </div>
          </div>
          <div className="flex justify-evenly pt-6 text-[#7b868a]">
            <div className=" relative flex items-center before:content-[''] before:absolute before:h-full before:w-px before:bg-[#e5e5e5] before:-left-4 lg:before:-left-7">
              <FaRegComments className="text-sm lg:text-3xl" />
              <span className="text-sm lg:text-xl mr-2">67 دیدگاه</span>
            </div>
            <div className=" flex items-center mr-1 lg:mr-2">
              <FaRegEye className="text-sm lg:text-3xl" />
              <span className="text-sm lg:text-xl mr-1 lg:mr-2">
                14,234 بازدید
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseStats;
