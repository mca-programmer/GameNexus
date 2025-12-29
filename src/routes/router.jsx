import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import GameDetails from "../pages/GameDetails";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import PrivateRouter from "../provider/PrivateRouter";
import Error404 from "../pages/Error404";
import Loading from "../pages/Loading";
import Profile from "../pages/Profile";
import AppsNotFound from "../pages/AppsNotFound";
import AllGames from "../pages/AllGames";
import GamingNews from "../pages/GamingNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loading />,
        errorElement: <Error404></Error404>,
      },
      {
        path: "about-us",
        Component: AboutUs,
        hydrateFallbackElement: <Loading />,
        errorElement: <AppsNotFound />,
      },
      {
        path: "all-games",
        element: <AllGames></AllGames>,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loading />,
        errorElement: <AppsNotFound />,
      },
      {
        path: "gaming-news",
        element: <GamingNews></GamingNews>,
        hydrateFallbackElement: <Loading />,
        errorElement: <AppsNotFound />,
      },
      {
        path: "game-details/:id",
        element: <GameDetails></GameDetails>,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loading />,
        errorElement: <AppsNotFound />,
      },
      {
        path: "my-Profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/forgot-password",
        Component: ForgotPassword,
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);

export default router;
