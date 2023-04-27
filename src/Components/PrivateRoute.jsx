import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './contextProvider';
import { Navigate,useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {users,loading}=useContext(AuthContext)
if(users){
    return children
}

    return <Navigate to='/sign-in' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;