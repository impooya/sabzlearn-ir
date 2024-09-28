import BreadCrump from "../components/BreadCrump";
import Comments from "../components/Comments";
import MainArticle from "../components/MainArticle";
import MainInfoArticlesSection from "../components/MainInfoArticlesSection";
import SuggestionArticles from "../components/SuggestionArticles";

function ArticleInfo() {
  return (
    <>
      <BreadCrump />
      <MainInfoArticlesSection
        rightContent={
          <>
            <MainArticle />
            <SuggestionArticles />
            <Comments />
          </>
        }
      />
    </>
  );
}

export default ArticleInfo;
