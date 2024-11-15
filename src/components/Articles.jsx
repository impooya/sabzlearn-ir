import { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ImageLoaderContext } from "../contexts/ImageLoader";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function Articles() {
  const imageLoaderConfig = useContext(ImageLoaderContext);
  async function getLatestArticle() {
    const res = await axios.get("http://localhost:4000/v1/articles");
    const article = await res.data;
    return article;
  }
  const { data: latestArticles } = useQuery({
    queryKey: ["article"],
    queryFn: getLatestArticle,
  });
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
              {latestArticles
                ?.slice(0, 3)
                .filter((article) => article.publish === 1)
                .map((article) => (
                  <div
                    key={article._id}
                    className="col-4 flex justify-start items-center flex-col   bg-white "
                  >
                    <div className="article-card my-12 shadow-lg hover:-translate-y-3 transition-all duration-[400ms] ease delay-75">
                      <div className="article-card__header">
                        <Link
                          to={`/article-info/${article.shortName}`}
                          className="article-card__link-img"
                        >
                          <img
                            src="images/blog/3.jpg"
                            className="article-card__img rounded-t-2xl"
                            alt="Article Cover"
                            onLoad={imageLoaderConfig.onImageLoaded}
                          />
                          {!imageLoaderConfig.isImgShow && (
                            <ClipLoader color="#1edb4d" />
                          )}
                        </Link>
                      </div>
                      <div className="article-card__content pt-4 pb-8 pr-12 pl-8">
                        <Link
                          to={`/article-info/${article.shortName}`}
                          className="article-card__link font-IRANSansBold hover:text-blue-600 transition-all delay-100"
                        >
                          {article.title}
                        </Link>
                        <p className="article-card__text text-[#898989] text-md pt-4 pb-10 line-clamp-1">
                          {article.description}
                        </p>
                        <Link
                          to={`/article-info/${article.shortName}`}
                          className="article-card__btn text-green-primery border-2 border-solid border-green-primery text-lg py-1 px-2 rounded-lg hover:text-white transition-all ease duration-[400ms] hover:bg-green-primery "
                        >
                          بیشتر بخوانید
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Articles;
