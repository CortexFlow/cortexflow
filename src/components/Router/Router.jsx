import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage/home";
import ErrorPage from "../Pages/ErrorPage";
import InProgress from "../Pages/InProgress";
import BlogPage from "../Pages/Blog"

/* Articles */
import Article1 from "../Blog/Articles/Introducing CortexFlow/introducing_cortexflow";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/blog",
      element: <BlogPage />,
      errorElement: <ErrorPage />,
    },
    /* ------------------------------------------------------------------------------------------------------ */    
    /* Blog pages link */
    {
      path: "/blog/introducing-cortexflow",
      element: <Article1 />,
      errorElement: <ErrorPage />
    },
    {
      path: "/blog/federated-computational-governance",
      element: <InProgress />,
      errorElement: <ErrorPage />
    },
    {
      path: "/blog/discovering-lidar",
      element: <InProgress />,
      errorElement: <ErrorPage />
    },
    {
      path: "/blog/revisiting-the-lambda-architecture",
      element: <InProgress />,
      errorElement: <ErrorPage />
    },

    /* ------------------------------------------------------------------------------------------------------ */   
    /* NewsLetter */
    {
      path: "/newsletter",
      element: <InProgress />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/doc",
      element: <InProgress />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/examples",
      element: <InProgress />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/use-cases",
      element: <InProgress />,
      errorElement: <ErrorPage />,
    },
  ],
);

export default router;
