import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userlogo from "../../assets/user.png";
import swal from 'sweetalert';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handelLogOut = () => {
        logOut()
            .then(() => {
                swal("Thanks!", "Log Out!", "success");
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const links = <>
        <li>
            <NavLink
                className={({ isActive, isPending }) => isActive ? 'text-blue-600' : isPending ? 'text-black' : ''}
                to="/"
            >Home</NavLink>
        </li>

        <li>
            <NavLink
                className={({ isActive, isPending }) => isActive ? 'text-blue-600' : isPending ? 'text-black' : ''}
                to="/login"
            >Login</NavLink>
        </li>

        <li>
            <NavLink
                className={({ isActive, isPending }) => isActive ? 'text-blue-600' : isPending ? 'text-black' : ''}
                to="/register"
            >Register</NavLink>
        </li>
        {
            user && <>
                <li>
                    <NavLink
                        className={({ isActive, isPending }) => isActive ? 'text-blue-600' : isPending ? 'text-black' : ''}
                        to="/profile"
                    >Profile</NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive, isPending }) => isActive ? 'text-blue-600' : isPending ? 'text-black' : ''}
                        to="/booked_events"
                    >Booked Events</NavLink>
                </li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100 shadow-lg mb-2 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>

                <Link to="/" className=" btn text-[#00c1a2] btn-ghost text-xl">
                    <figure>
                        <img className="w-6 " src="/event.png" alt="" />
                    </figure>
                    <span className="hidden md:flex">Dream Events</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-2 font-semibold text-[17px] menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>

            <div className="navbar-end">
                <div>
                    {/* <p className="w-full">{user?.displayName}</p> */}
                    {
                        user?.displayName
                    }
                </div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Link to="/profile"><img alt='user' src={user ? user.photoURL : userlogo} /></Link>
                    </div>
                </label>
                {
                    user ?
                        <button
                            onClick={handelLogOut}
                            className="btn"
                        >LogOut</button>
                        :
                        <Link
                            to="/login"
                        >
                            <button className="btn">
                                LogIn
                            </button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;