import { FaFacebook, FaTelegramPlane, FaTwitter } from "react-icons/fa";

function MainInfoCourse() {
  return (
    <>
      <section className="rounded-lg mt-4 p-8 shadow-[0_0_13px_1px_rgba(70,72,77,0.08)]">
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
                آموزش 20 کتابخانه جاوااسکریپت برای بازار کار
              </h1>
              <p className="course-info__text mb-4 xs:mb-10 text-sm xs:text-xl text-[#7b868a]">
                امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند.
                به قدری که حتی امروزه هیچ شرکت برنامه نویسی پروژه های خود را با
                Vanilla Js پیاده سازی نمی کند و همیشه از کتابخانه ها و فریمورک
                های موجود استفاده می کند. پس شما هم اگه میخواید یک برنامه نویس
                عالی فرانت اند باشید، باید کتابخانه های کاربردی که در بازار کار
                استفاده می شوند را به خوبی بلد باشید
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
                poster="/images/courses/js_project.png"
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
