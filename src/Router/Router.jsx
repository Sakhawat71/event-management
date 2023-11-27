import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <div></div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
    
])

export default Router;