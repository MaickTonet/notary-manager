import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/pageNotFound";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
]);
