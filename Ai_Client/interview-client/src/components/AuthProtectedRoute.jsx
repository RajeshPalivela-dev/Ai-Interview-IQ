import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ContextProvider from './ContextProvider'

const AuthProtectedRoute = () => {

    const loginData=JSON.parse(localStorage.getItem("userdetails"))
    if(!loginData){
        return <Navigate to="/login"/>
    }
  return (
    <div>
      <ContextProvider>
          <Outlet/>
      </ContextProvider>
    </div>
  )
}

export default AuthProtectedRoute