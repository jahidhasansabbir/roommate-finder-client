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
                Component: AddToFindRoommate
            },
            {
                path: 'browse-listing',
                loader: ()=>fetch('http://localhost:3000/roommate'),
                Component: BrowseListing
            },
            {
                path: 'my-listing',
                loader: ()=>fetch('http://localhost:3000/roommate'),
                Component: MyLIsting,
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
                element: <PrivateRoute><Details/></PrivateRoute>
            },
            {
                path: 'update/:id',
                loader: ({params})=>fetch(`http://localhost:3000/update/${params.id}`),
                Component: UpdatePost
            }

        ]
    }
])