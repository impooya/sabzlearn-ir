import BreadCrump from "../components/BreadCrump";
import Comments from "../components/Comments";
import MainArticle from "../components/MainArticle";
import MainInfoArticlesSection from "../components/MainInfoArticlesSection";
import NewCourses from "../components/NewCourses";
import QuickAccess from "../components/QuickAccess";
import RecentArticles from "../components/RecentArticles";
import SortedArticles from "../components/SortedArticles";
import SuggestionArticles from "../components/SuggestionArticles";
import TopRatedCourses from "../components/TopRatedCourses";

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
        leftContent={
          <>
            <TopRatedCourses />
            <QuickAccess />
            <RecentArticles />
            <SortedArticles />
            <NewCourses />
          </>
        }
      />
    </>
  );
}

export default ArticleInfo;
