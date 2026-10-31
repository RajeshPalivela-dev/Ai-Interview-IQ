import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthProtectedRoute = () => {

    const loginData=JSON.parse(localStorage.getItem("userdetails"))
    if(!loginData){
        return <Navigate to="/login"/>
    }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AuthProtectedRoute