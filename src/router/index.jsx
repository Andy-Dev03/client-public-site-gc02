import { createBrowserRouter, redirect } from "react-router";

import Home from "../pages/Home.jsx";
import Detail from "../pages/Detail.jsx";
import RootLayout from "../layouts/RootLayout.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default Router;
