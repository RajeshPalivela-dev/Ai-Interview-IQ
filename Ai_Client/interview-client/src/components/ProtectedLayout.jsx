import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedLayout = () => {

  const loginCredentials=JSON.parse(localStorage.getItem("userdetails"))
  console.log(loginCredentials,"logincreadeinas")
  if(loginCredentials!=null){
      return <Navigate to="/" />
  }
    
  
  return (
    <div>
         <Outlet/>
    </div>
  )
}

export default ProtectedLayout