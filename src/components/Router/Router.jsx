import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage/home";
import ErrorPage from "../Pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  /*{
    path: "/examples",
    element: <InProgress />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/use-cases",
    element: <InProgress />,
    errorElement: <ErrorPage />,
  },*/
]);

export default router;
