import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EventDatails from "../pages/EventDatails/EventDatails";
import Profile from "../pages/Profile/Profile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/event.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/event/:id',
                element: <PrivateRouter><EventDatails></EventDatails></PrivateRouter>,
                loader: ()=> fetch('/event.json')
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>,
            }
        ]
    }
    
])

export default Router;