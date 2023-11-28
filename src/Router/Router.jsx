import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EventDatails from "../pages/EventDatails/EventDatails";
import Profile from "../pages/Profile/Profile";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <div></div>,
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
                element: <EventDatails></EventDatails>,
                loader: ()=> fetch('/event.json')
            },
            {
                path: '/profile',
                element: <Profile></Profile>,
            }
        ]
    }
    
])

export default Router;