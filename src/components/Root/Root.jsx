import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-8 md:mx-10 lg:mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Root;