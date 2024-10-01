import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage/home";
import ErrorPage from "../Pages/ErrorPage"

/* import Blog from "../Pages/Blog" */
import InProgress from "../Pages/InProgress"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <InProgress />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/newsletter",
    element:<InProgress/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/doc",
    element:<InProgress/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/examples",
    element:<InProgress/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/use-cases",
    element:<InProgress/>,
    errorElement:<ErrorPage/>
  },
  
  
]);

export default router;
