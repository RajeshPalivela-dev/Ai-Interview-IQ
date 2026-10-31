import React from 'react'
import { navItems } from '../../../utils/navItems'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate=useNavigate()
    
    console.log(navItems,"navittems")

    function logout(){
          localStorage.clear()
          navigate("/login")
    }
  return (
    <div className='flex flex-col justify-between h-screen py-5 pl-1'>
          <div>
             <header>AI-INTERVIEW</header>
          
          
       
             <nav className='mt-10 '>
                  <ul>
                      {navItems.map((item)=>{
                        return <li key={item.path}>
                              <Link to={item.path}>{item.name}</Link>
                        </li>
                      })}
                  </ul>
             </nav>
          </div>
          <div>
              <button onClick={logout}>Logout</button>
          </div>
    </div>
  )
}

export default Sidebar