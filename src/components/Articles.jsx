import { FaArrowLeftLong } from "react-icons/fa6";

function Articles() {
  return (
    <>
      <section className="mx-0 my-7 md:my-16">
        <div className="container">
          <div className="flex items-center justify-between mb-7">
            <div className="flex flex-col items-start justify-between">
              <span className="text-lg md:text-[1.3rem] text-[#444446] pr-2 font-bold leading-[1.2] relative before:content-[''] md:before:block before:absolute before:bg-green-primery before:h-[3rem] before:w-1 before:rounded-md  before:-right-1 before:hidden before:rotate-12 after:content-[''] after:block after:w-44 md:after:w-60 after:h-4 after:absolute after:bg-green-primery/20 after:bottom-0 top-0 ">
                جدیدترین مقاله ها
              </span>
              <span className="text-[#9c9c9c] md:text-xl pr-2 text-sm">
                پیش به سوی ارتقای دانش
              </span>
            </div>
            <div>
              <a
                href="#"
                className="flex items-center justify-center text-white bg-green-primery text-xs py-1 px-1 md:text-lg md:px-4 md:py-2 rounded-lg hover:text-white gap-x-2"
              >
                تمامی مقاله ها
                <FaArrowLeftLong className="md:block hidden" />
              </a>
            </div>
          </div>

          <div className="articles__content">
            <div className="grid grid-cols-1 lmf:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
              <div className="col-4 flex justify-start items-center flex-col   bg-white ">
                <div className="article-card my-12 shadow-lg hover:-translate-y-3 transition-all duration-[400ms] ease delay-75">
                  <div className="article-card__header">
                    <a href="#" className="article-card__link-img">
                      <img
                        src="images/blog/3.jpg"
                        className="article-card__img rounded-t-2xl"
                        alt="Article Cover"
                      />
                    </a>
                  </div>
                  <div className="article-card__content pt-4 pb-8 pr-12 pl-8">
                    <a
                      href="#"
                      className="article-card__link font-IRANSansBold hover:text-blue-600 transition-all delay-100"
                    >
                      نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                    </a>
                    <p className="article-card__text text-[#898989] text-md pt-4 pb-10 line-clamp-">
                      زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج،
                      دارای کتابخانه های مختلفی برای تسریع...
                    </p>
                    <a
                      href="#"
                      className="article-card__btn text-green-primery border-2 border-solid border-green-primery text-lg py-1 px-2 rounded-lg hover:text-white transition-all ease duration-[400ms] hover:bg-green-primery "
                    >
                      بیشتر بخوانید
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 flex justify-start items-center flex-col  bg-white ">
                <div className="article-card my-12 shadow-lg hover:-translate-y-3 transition-all duration-[400ms] ease delay-75">
                  <div className="article-card__header">
                    <a href="#" className="article-card__link-img">
                      <img
                        src="images/blog/3.jpg"
                        className="article-card__img rounded-t-2xl"
                        alt="Article Cover"
                      />
                    </a>
                  </div>
                  <div className="article-card__content pt-4 pb-8 pr-12 pl-8">
                    <a
                      href="#"
                      className="article-card__link font-IRANSansBold hover:text-blue-600 transition-all delay-100"
                    >
                      نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                    </a>
                    <p className="article-card__text text-[#898989] text-md pt-4 pb-10 line-clamp-">
                      زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج،
                      دارای کتابخانه های مختلفی برای تسریع...
                    </p>
                    <a
                      href="#"
                      className="article-card__btn text-green-primery border-2 border-solid border-green-primery text-lg py-1 px-2 rounded-lg hover:text-white transition-all ease duration-[400ms] hover:bg-green-primery "
                    >
                      بیشتر بخوانید
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 flex justify-start items-center flex-col  bg-white ">
                <div className="article-card my-12 shadow-lg hover:-translate-y-3 transition-all duration-[400ms] ease delay-75">
                  <div className="article-card__header">
                    <a href="#" className="article-card__link-img">
                      <img
                        src="images/blog/3.jpg"
                        className="article-card__img rounded-t-2xl"
                        alt="Article Cover"
                      />
                    </a>
                  </div>
                  <div className="article-card__content pt-4 pb-8 pr-12 pl-8">
                    <a
                      href="#"
                      className="article-card__link font-IRANSansBold hover:text-blue-600 transition-all delay-100"
                    >
                      نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                    </a>
                    <p className="article-card__text text-[#898989] text-md pt-4 pb-10 line-clamp-">
                      زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج،
                      دارای کتابخانه های مختلفی برای تسریع...
                    </p>
                    <a
                      href="#"
                      className="article-card__btn text-green-primery border-2 border-solid border-green-primery text-lg py-1 px-2 rounded-lg hover:text-white transition-all ease duration-[400ms] hover:bg-green-primery "
                    >
                      بیشتر بخوانید
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Articles;
