import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const location = useLocation()
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading flex justify-center mx-auto loading-bars loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.node,
};

export default PrivateRouter;