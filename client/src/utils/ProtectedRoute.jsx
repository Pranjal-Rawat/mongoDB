import React from 'react'
import {useAuth} from '../AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({role}) {
    const user = {
        role : 'admin'
    };

    if(!user){
        return <Navigate to={'/login'} />
    }
    else {
        if(user.role === role){
            return <Outlet/>
        }
    }
  
}
