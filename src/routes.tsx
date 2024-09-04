import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/pageNotFound";
import RegisterPeoplePage from "./pages/registerPeople";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/registro-de-pessoas",
    element: <RegisterPeoplePage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
]);
