import React from 'react'
import { Link } from 'react-router-dom'

const RouteFallback = () => {


  return (
    <div>
        <h1>Page not found</h1>
         <Link to="/">home</Link>
         <Link to="/login">Login</Link>
    </div>
  )
}

export default RouteFallback