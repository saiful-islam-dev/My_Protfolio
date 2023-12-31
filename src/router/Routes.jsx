import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ],
  },
]);

export default router;
