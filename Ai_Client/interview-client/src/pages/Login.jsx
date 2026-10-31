import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
     const [loginValues,setLoginValues]=useState({email:"",password:""})
     const navigate=useNavigate()

     function handleChange(e){
        console.log(e,"e")
        console.log(e.target)
        console.log(e.target.value)
        const {name,value}=e.target;
        console.log(name,value,"value and name")

        const copyOfLogin={...loginValues}

        // setLoginValues((prev)=>({
             
        //       ...prev,
        //       [name]:value

        // }))

        copyOfLogin[name]=value;
        setLoginValues(copyOfLogin)

     }

     console.log(loginValues,"loginavlues")

    async function handleLogin(e){
        e.preventDefault()
         console.log(e,"e")
         console.log(loginValues,"loginvalues in hanlde login")
        try{
           const loginData=await axios.post("http://localhost:4000/auth/login",loginValues)
        console.log(loginData,"loginDta")
         console.log(loginData.data.message)
          //storea token in local
           const token=loginData.data.token;
           console.log(token,"token")
           const logintoken=localStorage.setItem("token",JSON.stringify(token))
           const userDetails=localStorage.setItem("userdetails",JSON.stringify(loginData.data.userDetails))
           console.log(logintoken,"login")
         toast.success(loginData.data.message)
         navigate("/")
          
        }catch(err){
            console.log(err,"errin loginpage")
            console.log(err.message,"err in login")
            console.log(err.response.data.message,"resonse")
            toast.error(err.response.data.message)
        }
      }

  return (
    <div className='h-screen flex justify-center items-center'>
         <form className="flex gap-4 flex-col" onSubmit={handleLogin}>
              <div>
                  <label htmlFor='email'>Email</label>
                  <input className='border-2' type="email" value={loginValues.email} name="email" id="email" onChange={handleChange}/>

              </div>

               <div>
                  <label htmlFor='password'>Password</label>
                  <input className="border-2" type="password" value={loginValues.password} name="password" id="password" onChange={handleChange} />
                  
              </div>

              <div>
                   <input type="submit" value="Submit"/>
              </div>



         </form>
         <di>
             <Link to="/signup" className='bg-blue-500 p-2.5'>createAccount</Link>
         </di>
    </div>
  )
}

export default Login