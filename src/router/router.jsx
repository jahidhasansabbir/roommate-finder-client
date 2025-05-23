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

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path:'add-to-find-roommate',
                element:<PrivateRoute><AddToFindRoommate/></PrivateRoute>
            },
            {
                path: 'browse-listing',
                loader: ()=>fetch('http://localhost:3000/roommate'),
                hydrateFallbackElement:<Loading></Loading>,
                Component: BrowseListing
            },
            {
                path: 'my-listing',
                loader: ()=>fetch('http://localhost:3000/roommate'),
                element: <PrivateRoute><MyLIsting/></PrivateRoute>,
                hydrateFallbackElement:<Loading></Loading>
            },
            {
                path:'login',
                Component: Login
            },
            {
                path:'register',
                Component: Register
            },
            {
                path: 'details/:id',
                loader: ({params})=>fetch(`http://localhost:3000/details/${params.id}`),
                element: <PrivateRoute><Details/></PrivateRoute>,
                hydrateFallbackElement:<Loading></Loading>
            },
            {
                path: 'update/:id',
                loader: ()=>fetch("http://localhost:3000/roommate"),
                hydrateFallbackElement:<Loading></Loading>,
                element: <PrivateRoute><UpdatePost/></PrivateRoute>
            }

        ]
    },
    {
        path:'*',
        Component: Error
    }
])