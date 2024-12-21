import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isUserLogin , children}) => {

    if(isUserLogin){
        return children;
    }
    else{
        return <Navigate to="/login"/>
    }

}

export default PrivateRoute