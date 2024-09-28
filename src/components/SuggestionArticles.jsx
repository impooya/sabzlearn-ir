import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SuggestionArticles() {
  return (
    <>
      <div className="my-16 py-14 px-10 rounded-lg bg-[#f0f2f7]">
        <div className="grid grid-cols-2">
          <div>
            <div className=" suggestion-articles__right  relative flex items-center ">
              <a href="#">
                <FaArrowRight className="text-[#adb5de] hover:text-[#1e83f0] transition-all delay-100" />
              </a>
              <a
                href="#"
                className="text-center my-0 mx-5  hover:text-[#1e83f0] transition-all delay-100"
              >
                سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه
                نویسان
              </a>
            </div>
          </div>
          <div>
            <div className="  suggestion-articles__left flex-row-reverse relative flex items-center  ">
              <a href="#">
                <FaArrowLeft className="text-[#adb5de] hover:text-[#1e83f0] transition-all delay-100" />
              </a>
              <a
                href="#"
                className="text-center my-0 mx-5 hover:text-[#1e83f0] transition-all delay-100"
              >
                سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه
                نویسان
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuggestionArticles;
