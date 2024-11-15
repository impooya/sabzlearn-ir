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
import AdminPanelHome from "./page/AdminPanel/AdminPanelHome";
import Users from "./page/AdminPanel/Users/Users";
import Courses from "./page/AdminPanel/Courses/Courses";
import Menus from "./page/AdminPanel/Menus/Menus";
import Articles from "./page/AdminPanel/Articles/Articles";
import CategoryPanel from "./page/AdminPanel/Category/Category";
import AdminContact from "./page/AdminPanel/Contact/Contact";
import Sessions from "./page/AdminPanel/Sessions/Sessions";
import Comments from "./page/AdminPanel/Comments/Comments";
import Offs from "./page/AdminPanel/Offs/Offs";

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
  {
    path: "/p-admin",
    element: <AdminPanelHome />,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      { path: "courses", element: <Courses /> },
      { path: "menus", element: <Menus /> },
      { path: "articles", element: <Articles /> },
      { path: "category", element: <CategoryPanel /> },
      { path: "contacts", element: <AdminContact /> },
      { path: "sessions", element: <Sessions /> },
      { path: "comments", element: <Comments /> },
      { path: "offs", element: <Offs /> },
    ],
  },
]);
