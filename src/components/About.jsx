import { FaRegCopyright } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
function About() {
  return (
    <>
      <section className="mx-0 my-7 md:my-16">
        <div className="container">
          <div className="flex flex-col items-start justify-between w-full mb-7">
            <span className="text-lg md:text-[1.3rem] w-full text-[#444446] pr-2 font-bold leading-[1.2] relative before:content-[''] md:before:block before:absolute before:bg-green-primery before:h-[3rem] before:w-1 before:rounded-md  before:-right-1 before:hidden before:rotate-12 after:content-[''] after:block after:w-full after:h-4 after:absolute after:bg-green-primery/20 after:bottom-0 top-0 ">
              ما چه کمکی بهتون میکنیم؟
            </span>
            <span className="text-[#9c9c9c] md:text-xl pr-2 text-sm">
              از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست
            </span>
          </div>

          <section className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
              <div className="bg-white shadow-xl w-full rounded-lg">
                <div className="flex justify-start items-center py-5 px-4 gap-x-4">
                  <div className="text-5xl md:text-8xl text-[#666]">
                    <FaRegCopyright />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-y-3">
                    <span className="font-IRANSansBold text-lg md:text-xl">
                      دوره های اختصاصی
                    </span>
                    <span>با پشتیبانی و کیفیت بالا ارائه میده !</span>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-xl w-full rounded-lg">
                <div className="flex justify-start items-center py-5 px-4 gap-x-4">
                  <div className="text-5xl md:text-8xl text-[#666]">
                    <FaLeaf />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-y-3">
                    <span className="font-IRANSansBold text-lg md:text-xl">
                      اجازه تدریس
                    </span>
                    <span>به هر مدرسی رو نمیده. چون کیفیت براش مهمه !</span>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-xl w-full rounded-lg">
                <div className="flex justify-start items-center py-5 px-4 gap-x-4">
                  <div className="text-5xl md:text-8xl text-[#666]">
                    <FaGem />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-y-3">
                    <span className="font-IRANSansBold text-lg md:text-xl">
                      دوره پولی و رایگان
                    </span>
                    <span>
                      براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در
                      پشتیبانی و اپدیت دوره ارائه بده
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-xl w-full rounded-lg">
                <div className="flex justify-start items-center py-5 px-4 gap-x-4">
                  <div className="text-5xl md:text-8xl text-[#666]">
                    <FaCrown />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-y-3">
                    <span className="font-IRANSansBold text-lg md:text-xl">
                      اهمیت به کاربر
                    </span>
                    <span>
                      اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به
                      کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار
                      هست
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default About;
