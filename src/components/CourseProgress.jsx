import { FaChartLine } from "react-icons/fa";

function CourseProgress() {
  return (
    <>
      <>
        <div className="course-progress rounded-2xl my-4 xs:my-11 pt-6 xs:pt-8 pl-8 pb-4 pr-8 bg-[#f0f2f7]">
          <div className="course-progress__header flex items-center mb-3 xs:mb-6 ">
            <FaChartLine className="text-xl xs:text-2xl text-[#7b868a]" />
            <span className="course-progress__title mr-3 text-[#7b868a] xs:text-xl">
              درصد پیشرفت دوره: 100%
            </span>
          </div>
          <div className="flex justify-between mb-1"></div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-primery h-2.5 rounded-full"
              style={{ width: "45%" }}
            />
          </div>
        </div>
      </>
    </>
  );
}

export default CourseProgress;
