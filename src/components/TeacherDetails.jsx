import { FaChalkboardTeacher } from "react-icons/fa";

function TeacherDetails() {
  return (
    <>
      <div className="rounded-lg p-6 mt-6 shadow-shade-primery">
        <div className="flex items-start justify-between flex-col xs:flex-row gap-y-3">
          <div className="flex items-center">
            <img
              src="/images/info/teacher.jfif"
              alt="Teacher Profile"
              className="w-14 h-auto rounded-[50%] shadow-[2px_2px_20px_#00000021]"
            />
            <div className="flex flex-col mr-6">
              <a href="#" className="text-[#7b868a]">
                محمدامین سعیدی راد
              </a>
              <span className="text-[#7b868a] text-lg ">
                Front End & Back End Developer
              </span>
            </div>
          </div>
          <div className="flex items-center text-white bg-green-primery py-1 px-3 rounded-lg">
            <FaChalkboardTeacher className="text-lg xs:text-2xl" />
            <span className="text-md xs:text-xl font-IRANSansBold mr-1">
              مدرس
            </span>
          </div>
        </div>
        <p className="mt-3 text-[#7b868a] text-sm">
          اول از همه برنامه نویسی اندروید رو شروع کردم و نزدیک به 2 سال با زبان
          جاوا اندروید کار میکردم .بعد تصمیم گرفتم در زمینه وب فعالیت داشته
          باشم.و..
        </p>
      </div>
    </>
  );
}

export default TeacherDetails;
