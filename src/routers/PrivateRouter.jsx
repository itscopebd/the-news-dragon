import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRouter = ({children}) => {

    const {User,loading}=useContext(AuthContext);
   const location=useLocation();

   if (loading) {

   return <Spinner animation="border" variant="primary" />
    
   }
    if (User) {
       return children 
    }

    return <Navigate to="/login" state={{form:location}} replace></Navigate>;
};

export default PrivateRouter;