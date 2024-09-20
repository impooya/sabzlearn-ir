import { createBrowserRouter } from "react-router-dom";
import Root from "./page/Root";
import Home from "./page/Home";
import CourseInfo from "./page/CourseInfo";
import Category from "./page/Category";
import ArticleInfo from "./page/ArticleInfo";

export const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/course-info/:categoryName",
        element: <CourseInfo />,
      },
      {
        path: "/category-info/:categoryName",
        element: <Category />,
      },
      {
        path: "/article-info/:articleName",
        element: <ArticleInfo />,
      },
    ],
  },
]);
