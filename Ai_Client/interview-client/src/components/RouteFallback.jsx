import React from 'react'
import { Link } from 'react-router-dom'

const RouteFallback = () => {


  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col gap-1.5'> 
            <div>
            <h1>Page not found</h1>
        </div>
        <div>
             <Link to="/" className='text-blue-600 gap-1.5'>home</Link>
         <Link to="/login" className ='text-green-500'>Login</Link>
        </div>
        </div>
    </div>
  )
}

export default RouteFallback