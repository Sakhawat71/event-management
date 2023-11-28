import { Link } from "react-router-dom";
import { ImSad } from "react-icons/im";

const ErrorPage = () => {
    
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <ImSad className="text-7xl text-red-700 mb-3"/>
            <h1 className="text-red-700 text-8xl font-bold">404</h1>
            <h2 className="text-2xl">Page Not Found</h2>
            <Link
                to="/"
                className="btn mt-10 outline text-base text-blue-600"
            >Go Home</Link>
        </div>
    );
};

export default ErrorPage;