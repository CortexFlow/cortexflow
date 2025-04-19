import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../Pages/ErrorPage";
import InProgress from "../Pages/InProgress";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  /* NewsLetter */
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
]);

export default router;
