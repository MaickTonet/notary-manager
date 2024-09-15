import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import RegisterHistory from "./pages/registerHistory";
import Login from "./pages/login";
import SignUp from "./pages/signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
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
