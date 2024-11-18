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
import Index from "./page/AdminPanel/Index/Index";
import UserPanel from "./page/UserPanel/Index";
import UserPanelIndex from "./page/UserPanel/Index/Index";
import UserPanelOrders from "./page/UserPanel/Orders/Orders";
import UserPanelCourses from "./page/UserPanel/Courses/Courses";
import SendTickets from "./page/UserPanel/Tickets/SendTickets";
import UserPanelTickets from "./page/UserPanel/Tickets/Tickets";
import UserPanelTicketAnswer from "./page/UserPanel/Tickets/TicketAnswer";
import UserPanelEditAccount from "./page/UserPanel/EditAccount/EditAccount";
import PAdminPrivate from "./components/PAdminPrivate";
import Tickets from "./page/AdminPanel/Tickets/Tickets";
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
        element: (
          <PAdminPrivate>
            <Login />
          </PAdminPrivate>
        ),
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
      {
        path: "/my-account",
        element: <UserPanel />,
        children: [
          {
            index: true,
            element: <UserPanelIndex />,
          },
          { path: "orders", element: <UserPanelOrders /> },
          { path: "courses", element: <UserPanelCourses /> },
          { path: "send-ticket", element: <SendTickets /> },
          { path: "tickets", element: <UserPanelTickets /> },
          { path: "tickets/answer/:id", element: <UserPanelTicketAnswer /> },
          { path: "edit-account", element: <UserPanelEditAccount /> },
        ],
      },
    ],
  },
  {
    path: "/p-admin",

    element: <AdminPanelHome />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "users",
        element: <Users />,
      },
      { path: "tickets", element: <Tickets /> },
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
