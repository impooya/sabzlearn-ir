import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FaChevronDown, FaYoutube } from "react-icons/fa";

function IntroductionCourse() {
  return (
    <>
      <div className=" p-8 md:p-12 rounded-lg shadow-shade-primery">
        <div className="introduction__item">
          <div className="w-full  mb-7 flex justify-center items-center flex-col">
            <span className="text-lg md:text-[1.3rem] w-full text-[#444446] pr-2 font-bold leading-[1.2] relative before:content-[''] md:before:block before:absolute before:bg-green-primery before:h-[3rem] before:w-1 before:rounded-md  before:-right-1 before:hidden before:rotate-12 after:content-[''] after:hidden xs:after:block after:w-full after:h-4 after:absolute after:bg-green-primery/20 after:bottom-0 top-0 ">
              آموزش 20 کتابخانه جاوا اسکریپت مخصوص بازار کار
            </span>
          </div>
          <img
            src="/images/info/1.gif"
            alt="course info image"
            className="introduction__img max-w-full h-auto md:mt-5 block rounded-2xl"
          />
          <p className="introduction__text mt-5 text-[#7a7a7a] text-md md:text-lg">
            کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد و سالانه
            چندین کتابخانه جدید نیز به این لیست اضافه می شود که در بازار کار به
            شدت از آن ها استفاده می شود و اگر بدون بلد بودن این کتابخانه ها وارد
            بازار کار شوید، خیلی اذیت خواهید شد و حتی ممکن است ناامید شوید!
          </p>
          <p className="introduction__text mt-5 text-[#7a7a7a] text-md md:text-lg">
            در این دوره نحوه کار با 20 مورد از پر استفاده ترین کتابخانه های جاوا
            اسکریپت به صورت پروژه محور به شما عزیزان آموزش داده می شود تا هیچ
            مشکلی برای ورود به بازار کار نداشته باشید
          </p>
        </div>
        <div className="introduction__item">
          <div className="w-full mb-7 flex justify-center items-center flex-col">
            <span className="text-lg md:text-[1.3rem] w-full text-[#444446] pr-2 font-bold leading-[1.2] relative before:content-[''] md:before:block before:absolute before:bg-green-primery before:h-[3rem] before:w-1 before:rounded-md  before:-right-1 before:hidden before:rotate-12 after:content-[''] after:hidden xs:after:block after:w-full after:h-4 after:absolute after:bg-green-primery/20 after:bottom-0 top-0 ">
              هدف از این دوره چیست؟ (تنها راه ورود به بازار کار و کسب درآمد)
            </span>
          </div>
          <img
            src="/images/info/2.jpg"
            alt="course info image"
            className="introduction__img max-w-full h-auto img-fluid mt-5 block rounded-2xl"
          />
          <p className="introduction__text mt-5 text-[#7a7a7a] text-md md:text-lg">
            وقتی برای اولین بار وارد یکی از شرکت های برنامه نویسی شدم، از
            کتابخانه هایی به اسم Lodash و Formik استفاده می شد، در حالی که من
            اولین بارم بود اسم Formik را می شنیدم و تا اون موقع از این کتابخانه
            ها استفاده نکرده بودم.
          </p>
          <p className="introduction__text mt-5 text-[#7a7a7a] text-md md:text-lg">
            همینجا بود که متوجه شدم کتابخانه های جاوا اسکریپت یکی از مهم ترین
            مباحثی هستند که هر برنامه نویس وب برای ورود به بازار کار و کسب درآمد
            بهتر، راحت و بیشتر باید با آن ها کار کرده باشد
          </p>
          <p className="introduction__text mt-5 text-[#7a7a7a] text-md md:text-lg">
            همان طور که از اسم این دوره مشخص است، هدف از این دوره آموزش 20 مورد
            از کاربردی ترین و پر استفاده ترین کتابخانه های جاوا اسکریپت است تا
            شما بتوانید بعد از این دوره با قدرت و آمادگی بیشتر ادامه مسیر برنامه
            نویسی وب را ادامه دهید، ری اکت یا نود یا … را راحت تر یاد بگیرید و
            در نهایت وارد بازار کار شده و کسب درآمد کنید.
          </p>
          <p className="introduction__text mt-5 text-[#7a7a7a] text-md md:text-lg">
            شا به عنوان یک برنامه نویس وب، حداقل اگر با کتابخانه خاصی کار نکرده
            باشید، باید بلد باشید که چطور باید یک کتابخانه جدید را یاد بگیرید.
            فرض کنید یک یک کتابخانه جدید ساخته شد. آیا شما باید منتظر دوره
            آموزشی باشید؟! قطعا نه.
          </p>
          <p className="introduction__text mt-5 text-[#7a7a7a] text-md md:text-lg">
            در این دوره سعی کردیم علاوه بر آموزش مستقیم هر کتابخانه، نحوه
            یادگیری یک کتابخانه جدید را نیز به شما عزیزان آموزش دهیم تا بعد از
            گذراندن دوره، دیگر وابسته هیچ دوره یا شخص خاصی نباشید و اگر کتابخانه
            جدیدی به دنیای جاوا اسکریپت و وب اضافه شد، به راحتی بتوانید آن را
            یاد بگیرید.
          </p>
        </div>
        <div className="introduction__btns mt-5 flex-wrap gap-y-2 md:flex-nowrap flex justify-start gap-x-2 items-center">
          <a
            href="#"
            className="introduction__btns-item text-green-primery border-2 border-solid border-green-primery rounded-lg px-2 py-1 md:py-2 md:px-4 font-IRANSansBold text-sm md:text-lg hover:text-white hover:bg-green-primery transition-all "
          >
            دانلود همگانی ویدیوها
          </a>
          <a
            href="#"
            className="introduction__btns-item text-green-primery border-2 border-solid border-green-primery rounded-lg px-2 py-1 md:py-2 md:px-4 font-IRANSansBold text-sm md:text-lg hover:text-white hover:bg-green-primery transition-all "
          >
            دانلود همگانی پیوست‌ها
          </a>
        </div>

        <Accordion className="mt-5">
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-IRANSans">معرفی دوره</h1>
          </AccordionSummary>
          <AccordionDetails className="flex justify-between items-center">
            <div className="introduction__accordion-right flex items-center gap-x-2 md:gap-x-0">
              <span className="size-5 md:size-10 border border-solid text-sm md:text-lg border-[#bfbfbf] text-[#656464] flex justify-center items-center rounded-full ">
                1
              </span>
              <FaYoutube className="mx-2 text-[#939aa3] md:block hidden text-xl" />
              <a
                href="#"
                className="introduction__accordion-link text-[#161616] md:text-lg text-sm"
              >
                معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
              </a>
            </div>
            <div className="introduction__accordion-left">
              <span className="text-[#7a7a7a] hidden md:block">18:34</span>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-2">
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-IRANSans">معرفی دوره</h1>
          </AccordionSummary>
          <AccordionDetails className="flex justify-between items-center">
            <div className="introduction__accordion-right flex items-center gap-x-2 md:gap-x-0">
              <span className="size-5 md:size-10 border border-solid text-sm md:text-lg border-[#bfbfbf] text-[#656464] flex justify-center items-center rounded-full ">
                1
              </span>
              <FaYoutube className="mx-2 text-[#939aa3] md:block hidden text-xl" />
              <a
                href="#"
                className="introduction__accordion-link text-[#161616] md:text-lg text-sm"
              >
                معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
              </a>
            </div>
            <div className="introduction__accordion-left">
              <span className="text-[#7a7a7a] hidden md:block">18:34</span>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-2">
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1 className="font-IRANSans">معرفی دوره</h1>
          </AccordionSummary>
          <AccordionDetails className="flex justify-between items-center">
            <div className="introduction__accordion-right flex items-center gap-x-2 md:gap-x-0">
              <span className="size-5 md:size-10 border border-solid text-sm md:text-lg border-[#bfbfbf] text-[#656464] flex justify-center items-center rounded-full ">
                1
              </span>
              <FaYoutube className="mx-2 text-[#939aa3] md:block hidden text-xl" />
              <a
                href="#"
                className="introduction__accordion-link text-[#161616] md:text-lg text-sm"
              >
                معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
              </a>
            </div>
            <div className="introduction__accordion-left">
              <span className="text-[#7a7a7a] hidden md:block">18:34</span>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default IntroductionCourse;
