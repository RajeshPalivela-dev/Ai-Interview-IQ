import React from 'react'
import { useState } from 'react'

const Signup = () => {

     const[formValues,setFormValues]=useState({name:"",age:"",email:"",password:"",cofirmPassword:"",phone:""})
      console.log(formValues,"formvalues")
  return (
    <div className='h-screen flex justify-center items-center'>
        <form className='flex gap-5 flex-col'>
              <div>
                  <label htmlFor='name'>Name</label>
                  <input className='border-2' type="text" name='name'id='name' placeholder='Enter Number'/>
              </div>

               <div>
                  <label htmlFor='age'>Age</label>
                  <input className='border-2' type="Number" name='age'id='age' placeholder='Enter age'/>
              </div>

              <div>
                  <label htmlFor='email'>Email</label>
                  <input className='border-2' type="email" name='email'id='email' placeholder='Enter email'/>
              </div>

              <div>
                  <label htmlFor='password'>Password</label>
                  <input className='border-2' type="password" name='password'id='password' placeholder='password'/>
              </div>

              <div>
                  <label htmlFor='confirm-password'>ConfirmPassword</label>
                  <input className='border-2' type="password" name="confirm-password" id="cofirm-password"  />
              </div>

               <div>
                  <label htmlFor='phone'>Phone</label>
                  <input className='border-2' type="text" name='phone'id='phone' placeholder='Enter phone'/>
              </div>

            <div>
                  <input className='border-2' type="submit" value="Submit"/>
            </div>
             
        </form>
    </div>
  )
}

export default Signup