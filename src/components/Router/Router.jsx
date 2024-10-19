import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage/home";
import ErrorPage from "../Pages/ErrorPage";
import InProgress from "../Pages/InProgress";
import BlogPage from "../Pages/Blog"

/* Articles */
import Article1 from "../Blog/Articles/01 Introducing CortexFlow/introducing_cortexflow";
import Article2 from "../Blog/Articles/02 Federated Computational Governance/federated_computational_governance_article";
import Article3 from "../Blog/Articles/03 Discovering LiDar/discovering_lidar_article";
import Article4 from "../Blog/Articles/04 Revisiting Lambda Architecture/revisiting_lambda_architecture";

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
      element: <Article2 />,
      errorElement: <ErrorPage />
    },
    {
      path: "/blog/discovering-lidar",
      element: <Article3 />,
      errorElement: <ErrorPage />
    },
    {
      path: "/blog/revisiting-the-lambda-architecture",
      element: <Article4 />,
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
