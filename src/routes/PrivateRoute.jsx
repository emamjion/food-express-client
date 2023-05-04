import React, { useContext } from 'react';
import './PrivateRoute.css';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='loading'>Loading...</div>
    }
    
    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to='/login'></Navigate>
};

export default PrivateRoute;