import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddToFindRoommate from "../pages/AddToFindRoommate";
import BrowseListing from "../pages/BrowseListing";
import MyLIsting from "../pages/MyLIsting";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import PrivateRoute from "../provider/PrivateRoute";
import UpdatePost from "../pages/UpdatePost";
import Error from "../pages/Error";
import Loading from "../pages/Loading";
import AboutUs from "../pages/AboutUs";
import Support from "../pages/Support";
import Overview from "../pages/Dashboard/Overview";
import DashboardLayout from "../layout/DashboardLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "browse-listing",
        loader: () => fetch(`${import.meta.env.VITE_server}/roommate`),
        hydrateFallbackElement: <Loading></Loading>,
        Component: BrowseListing,
      },
      {
        path: "details/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_server}/details/${params.id}`),
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "support",
       element: <PrivateRoute><Support></Support></PrivateRoute>
      },
    ],
  },

  {
    path: "dashboard",
    element: (
        <DashboardLayout></DashboardLayout>
    ),
    children: [
      {
        index: true,
        Component: Overview,
      },
      {
        path: "dashboard/add-to-find-roommate",
        element: (
          <PrivateRoute>
            <AddToFindRoommate />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard/my-listing",
        loader: () => fetch(`${import.meta.env.VITE_server}/roommate`),
        element: (
          <PrivateRoute>
            <MyLIsting />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "dashboard/update/:id",
        loader: () => fetch(`${import.meta.env.VITE_server}/roommate`),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <UpdatePost />
          </PrivateRoute>
        ),
      },

      {
        path: "dashboard/browse-listing",
        loader: () => fetch(`${import.meta.env.VITE_server}/roommate`),
        hydrateFallbackElement: <Loading></Loading>,
        Component: BrowseListing,
      }
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
