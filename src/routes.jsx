import { createBrowserRouter } from "react-router-dom";
import Root from "./page/Root";

export const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
  },
]);
