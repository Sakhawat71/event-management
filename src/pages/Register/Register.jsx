import { Link, } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa"
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState([]);
    const { googleSignIn, createUserWithEmailPass, } = useContext(AuthContext);



    // Email Password
    const handelEmailLogIn = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo')
        const email = form.get("email");
        const password = form.get('password')

        console.log(name, photo, email, password)

        setError("")
        if (!/^.{6,}$/.test(password)) {
            setError("Password is less than 6 characters")
            return;
        }
        else if (!/^(?=.*[A-Z]).{6,}$/.test(password)) {
            setError("At least one capital letter is required")
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{6,}$/.test(password)) {
            setError("At least one special character is required")
            return;
        }
        
        createUserWithEmailPass(email, password)
            .then(result => {
                const currentUser = result.user;
                swal("Good job!", "You clicked the button!", "success");
                setError("")

                updateProfile(currentUser,{
                    displayName: name, 
                    photoURL: photo
                })
                .then(()=>{
                
                })
                .catch((error)=>{
                    console.log(error)
                })
            })
            .catch(error => {
                console.error(error)
            })
    }

    // sign with google
    const signWithGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result)
                
            })
            .catch((error) => {
                setError(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>

                <div className="text-center p-2 mb-2 mx-auto card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <Link onClick={signWithGoogle} className="btn">Continue with Google <FaGoogle className="text-blue-700" /></Link>
                </div>
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">

                    <form onSubmit={handelEmailLogIn} className="card-body lg:w-[450px]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Photo Url</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo Url"
                                className="input input-bordered"
                            />
                        </div>

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
                                className="input input-bordered "
                                required />

                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-12 right-6 text-xl">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }</span>

                            {/* <div className="flex justify-center items-center mt-2">
                                <input
                                    type="checkbox"
                                    className="cursor-pointer"
                                    name="agree"
                                    id="" />
                                <label htmlFor="agree" className="ml-2">
                                    Agreeing to our <a className="underline text-green-600 cursor-pointer">Terms of Service</a> and <a className="underline text-green-600 cursor-pointer">Privacy Policy</a></label>
                            </div> */}
                            <span className="text-red-700">
                                {
                                    error
                                }
                            </span>
                        </div>

                        <input
                            type="submit"
                            value="Register"
                            className="btn text-white bg-sky-500 text-[16px]"
                        />

                        {/* <div className="form-control mt-6 mb-2">
                            <button className="btn btn-primary">Register</button>
                        </div> */}

                        <p className="font-semibold text-center">Already have an account?
                            <Link to="/login">
                                <button className="btn btn-sm ml-1 text-blue-700">Login</button>
                            </Link> </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;