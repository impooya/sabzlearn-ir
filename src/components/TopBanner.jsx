import { FaGraduationCap } from "react-icons/fa";
function TopBanner() {
  return (
    <>
      <div className="shadow-[0_0_13px_1px_rgba(70,72,77,0.08)] border mt-3 p-5 rounded-lg border-solid border-[#f2f2f2]">
        <div className="course-info__register text-center bg-[#1fbd50] py-3 px-2 rounded-lg shadow-[0_2px_12px_rgba(31,189,80,36%)]">
          <span className="course-info__register-title text-xl text-white font-IRANSansBold flex justify-center items-center gap-x-2">
            <FaGraduationCap className="text-2xl" />
            دانشجوی دوره هستید
          </span>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
