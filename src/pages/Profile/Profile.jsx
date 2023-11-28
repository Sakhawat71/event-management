import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {

    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div className="h-screen flex flex-col justify-center items-center mx-auto">
            <figure>
                <img src={user?.photoURL} alt="" />
            </figure>
            <h4 className="text-xl font-semibold">{user?.displayName}</h4>
            <p className="text-blue-600 text-xl">{user?.email}</p>
            <p className="font-semi-bold">{user?.uid}</p>
        </div>
    );
};

export default Profile;