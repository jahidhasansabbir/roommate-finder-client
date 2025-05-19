import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddToFindRoommate from "../pages/AddToFindRoommate";
import BrowseListing from "../pages/BrowseListing";
import MyLIsting from "../pages/MyLIsting";

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
                Component: BrowseListing
            },
            {
                path: 'my-listing',
                Component: MyLIsting,
            }

        ]
    }
])