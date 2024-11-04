import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { CiFolderOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import {
  FaRegEye,
  FaFacebook,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
function MainArticle() {
  const { articleName } = useParams();
  async function getOneArticelInfos() {
    const res = await axios.get(
      `http://localhost:4000/v1/articles/${articleName}`
    );
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [articleName]);
  const {
    data: singleArticle,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["article", articleName],
    queryFn: getOneArticelInfos,
  });
  if (isLoading) {
    return <span>در حال لود شدن...</span>;
  }

  if (isError) {
    return <span>خطا در بارگذاری اطلاعات...</span>;
  }
  return (
    <>
      <div className=" p-8 rounded-lg shadow-shade-primery">
        <h1 className="article__title text-2xl font-IRANSansBold text-dark-primery border-b-2 border-solid border-b-[#f3f3f3] pb-4">
          {singleArticle?.title}
        </h1>
        <div className="article__header flex items-center pt-4 flex-wrap md:flex-nowrap">
          <div className="flex items-center justify-center gap-2 ml-4 ">
            <CiFolderOn className="text-lg text-[#c7c7c7]" />
            <a
              href="#"
              className="article-header__text md:text-sm  text-[#8f8f8f]"
            >
              {singleArticle?.categoryID.title}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 ml-4">
            <CiUser className="text-lg text-[#c7c7c7]" />
            <span className="article-header__text md:text-sm  text-[#8f8f8f]">
              {singleArticle?.creator.name}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 ml-4">
            <CiClock2 className="text-lg text-[#c7c7c7]" />
            <span className="article-header__text md:text-sm  text-[#8f8f8f]">
              {singleArticle?.creator.name}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 ml-4">
            <FaRegEye className="text-lg text-[#c7c7c7]" />
            <span className="article-header__text md:text-sm  text-[#8f8f8f]">
              2.14k بازدید
            </span>
          </div>
        </div>
        <img
          src="/images/blog/1.jpg"
          alt="Article Cover"
          className="mt-14 block mx-auto"
        />

        <div className=" flex items-center my-6">
          <div className="flex items-center">
            <img
              src="/images/svgs/star_fill.svg"
              className="article__score-icon"
            />
            <img
              src="/images/svgs/star_fill.svg"
              className="article__score-icon"
            />
            <img
              src="/images/svgs/star_fill.svg"
              className="article__score-icon"
            />
            <img
              src="/images/svgs/star_fill.svg"
              className="article__score-icon"
            />
            <img src="/images/svgs/star.svg" className="article__score-icon" />
          </div>
          <span className="article__score-text mr-3 text-lg text-[#7d7d7f]">
            4.2/5 - (5 امتیاز)
          </span>
        </div>

        <p className="article__paragraph text-lg md:text-2xl leading-10 text-[#7d7e7f] ">
          جاوا اسکریپت یکی از زبان‌های برنامه‌نویسی اصلی حوزه فرانت‌اند است که
          به واسطه فریم ورک‌های آن می‌توان انواع وب سایت‌ها، اپلیکیشن‌ها و وب
          اپلیکیشن‌ها را طراحی کرد. به طور کلی بعد از یادگیری html و css معمولاً
          باید آموزش جاوا اسکریپت را نیز فرا بگیرید. . چرا که این زبان
          تکمیل‌کننده html و css بوده و در چنین شرایطی موقعیت‌های شغلی بیشتر را
          در اختیار خواهید داشت و همچنین می‌توانید پروژه‌های گسترده‌تری را انجام
          دهید. در حال حاضر با وجود منابع رایگان موجود در وب شما به راحتی
          می‌توانید زبان جاوا اسکریپت را به صورت حرفه‌ای فرا بگیرید. به همین
          واسطه در ادامه مطلب قصد داریم سایت‌های شاخص آموزش این زبان
          برنامه‌نویسی در جهان را به شما معرفی کنیم و در آخر بگوییم که بهترین
          سایت آموزش جاوا اسکریپت کدام است.
        </p>

        <div className="article-read bg-[#f2f2f2] rounded-[3rem] py-8 px-12 my-12">
          <span className="block text-[#333333] text-lg md:text-xl mb-2 font-IRANSansBold ">
            آنچه در این مقاله خواهید خواند
          </span>
          <ul className="flex flex-col">
            <li className="article-read__item">
              <a
                href="#"
                className=" text-lg md:text-2xl text-[#1e83f0] hover:underline"
              >
                معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
              </a>
            </li>
            <li className="article-read__item">
              <a
                href="#"
                className="text-lg md:text-2xl text-[#1e83f0] hover:underline"
              >
                یک راه آسان‌تر، دوره‌ های جاوا اسکریپت آکادمی سبزلرن!
              </a>
            </li>
            <li className="article-read__item">
              <a
                href="#"
                className="text-lg md:text-2xl text-[#1e83f0] hover:underline"
              >
                ثبت نام در دوره‌ های جاوا اسکریپت سبزلرن:
              </a>
            </li>
          </ul>
        </div>

        <img
          src="/images/blog/2.jpg"
          alt="Article Image"
          className="article__seconadary-banner block mx-auto"
        />
        <div className=" my-20">
          <h2 className="text-lg md:text-2xl text-[#008c25] font-IRANSansBold leading-4">
            معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
          </h2>
          <p className="text-lg md:text-2xl leading-10 text-[#7d7e7f] my-8 ">
            توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین سایت آموزش
            جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی هستند و منابع موجود
            در آن‌ها به زبان انگلیسی است. در نتیجه شما باید یا تسلط متوسط و
            حداقلی به زبان انگلیسی داشته باشید و یا اینکه با استفاده از گوگل
            ترنسلیت منابع موجود را ترجمه کرده و از آن‌ها استفاده کنید. به همین
            دلیل در انتهای محتوا به شما خواهیم گفت که راه آسان دیگری برای
            یادگیری زبان جاوا اسکریپت وجود دارد که شما بتوانید به واسطه آن به
            صورت رایگان و به زبان فارسی این زبان را یاد بگیرید.
          </p>
          <img
            src="/images/blog/4.png"
            alt="article body img"
            className="block my-0 mx-auto"
          />
        </div>
        <div className=" my-20">
          <h2 className=" text-lg md:text-2xl text-[#008c25] font-IRANSansBold leading-4">
            معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
          </h2>
          <p className="my-8 text-lg md:text-2xl leading-10 text-[#7d7e7f]">
            توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین سایت آموزش
            جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی هستند و منابع موجود
            در آن‌ها به زبان انگلیسی است. در نتیجه شما باید یا تسلط متوسط و
            حداقلی به زبان انگلیسی داشته باشید و یا اینکه با استفاده از گوگل
            ترنسلیت منابع موجود را ترجمه کرده و از آن‌ها استفاده کنید. به همین
            دلیل در انتهای محتوا به شما خواهیم گفت که راه آسان دیگری برای
            یادگیری زبان جاوا اسکریپت وجود دارد که شما بتوانید به واسطه آن به
            صورت رایگان و به زبان فارسی این زبان را یاد بگیرید.
          </p>
        </div>
        <div className="my-20">
          <h2 className="text-lg md:text-2xl text-[#008c25] font-IRANSansBold leading-4">
            معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
          </h2>
          <p className="my-8 text-lg md:text-2xl leading-10 text-[#7d7e7f]">
            توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین سایت آموزش
            جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی هستند و منابع موجود
            در آن‌ها به زبان انگلیسی است. در نتیجه شما باید یا تسلط متوسط و
            حداقلی به زبان انگلیسی داشته باشید و یا اینکه با استفاده از گوگل
            ترنسلیت منابع موجود را ترجمه کرده و از آن‌ها استفاده کنید. به همین
            دلیل در انتهای محتوا به شما خواهیم گفت که راه آسان دیگری برای
            یادگیری زبان جاوا اسکریپت وجود دارد که شما بتوانید به واسطه آن به
            صورت رایگان و به زبان فارسی این زبان را یاد بگیرید.
          </p>
          <img
            src="/images/blog/3.jpg"
            alt="article body img"
            className="block my-0 mx-auto"
          />
        </div>

        <div className="flex items-center">
          <span className="text-sm md:text-xl text-[#7d7e7f]">
            اشتراک گذاری :
          </span>
          <a
            href="#"
            className="flex items-center m-2 text-[#7b868a] hover:text-[#1e83f0] transition-all duration-300 delay-100 ease-in-out"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="#"
            className="flex items-center m-2 text-[#7b868a] hover:text-[#1e83f0] transition-all duration-300 delay-100 ease-in-out"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="flex items-center m-2 text-[#7b868a] hover:text-[#1e83f0] transition-all duration-300 delay-100 ease-in-out"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </>
  );
}

export default MainArticle;
