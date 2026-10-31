import React, { createContext, useEffect,useState } from 'react'

export const userProvider=createContext()
const ContextProvider = ({children}) => {
 const [userDetails,setUserDetails]=useState({})
    

    useEffect(()=>{
        const loginDetails=JSON.parse(localStorage.getItem("userdetails"))
       setUserDetails(loginDetails)
    },[])
  return (

        <userProvider.Provider value={{userDetails}}>
             {children}
        </userProvider.Provider>
    
  )
}

export default ContextProvider