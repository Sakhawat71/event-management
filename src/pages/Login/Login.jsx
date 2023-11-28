
import { useContext, useState } from "react";
import { Link, } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";



const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { logInWihtEmailPass } = useContext(AuthContext)

    const handelLogIn = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        logInWihtEmailPass(email, password)
            .then()
            .catch()
    }


    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>


                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handelLogIn} className="card-body pb-2 lg:w-[400px]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>


                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-12 right-4 text-xl">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>

                            <label className="label">
                                <Link
                                    href="#"
                                    className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>


                        <div className="form-control mt-6 mb-2">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <p >Don`t have an account? <Link to="/register">
                            <button className="btn btn-sm ml-1">Register</button>
                        </Link> </p>

                    </form>

                    <div className="text-center p-2 mb-2 mx-auto">
                        <Link className="btn">Sign with <FaGoogle className="text-blue-700"/></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;