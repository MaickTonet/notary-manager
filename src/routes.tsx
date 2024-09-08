import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import RegisterHistory from "./pages/registerHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home"/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/histórico-de-registros",
    element: <RegisterHistory />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
