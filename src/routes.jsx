import { createBrowserRouter } from "react-router-dom";
import Root from "./page/Root";
import Home from "./page/Home";
import CourseInfo from "./page/CourseInfo";
import Category from "./page/Category";
import ArticleInfo from "./page/ArticleInfo";
import Login from "./page/Login";
import Register from "./page/Register";
import MainCourses from "./components/MainCourses";
import Contact from "./page/Contact/Contact";

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
        path: "/course-info/:courseName",
        element: <CourseInfo />,
      },
      {
        path: "/category-info/:categoryName/:page",
        element: <Category />,
      },
      {
        path: "/article-info/:articleName",
        element: <ArticleInfo />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/courses/:page",
        element: <MainCourses />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
