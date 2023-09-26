import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../Hooks/useFirebase';
import GridLoader from "react-spinners/GridLoader";

const Private = ({children}) => {
    const [user,loading] = useAuthState(auth);
    let location = useLocation();
    
    // how to loaading
    if(loading){
        return (
            <div  className='relative flex z-[999999999999999999999999999999999] bg-[#2a333c99] justify-center h-screen w-screen items-center'>
             <GridLoader color="#0fefc2" size={27}/>
    </div>
        )
    }
    
    // private 
    if(user && user.uid){
       return children
    }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default Private;