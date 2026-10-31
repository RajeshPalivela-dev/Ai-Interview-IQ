import React, { useContext, useState } from 'react'
import { userProvider } from '../components/ContextProvider'
import moment from 'moment';
import UpdateProfile from '../components/UpdateProfile';
const Profile = () => {
   const {userDetails}=useContext(userProvider)
   console.log(userDetails,"userDetails")
   const[isFormEnable,setIsFormEnable]=useState(false)


   function calclate(dob){
    if(!dob) return null
     
    const newAge= moment().diff(dob,"years")
    console.log(newAge)
      return newAge;
   }


  return (
    <div className='h-screen relative'>
   
     <div>
          {isFormEnable?<UpdateProfile setIsFormEnable={setIsFormEnable} />:null}
     </div>

   
      <div className=' border-2  m-10 h-50 '>
         <div className='flex justify-end mr-2'>
             <button onClick={()=>setIsFormEnable(!isFormEnable)}>Edit</button>
        </div>
       
       <div>
         <div>
            <p>Name:{userDetails.name}</p>
        </div>
         <div>
            <p>Age:{userDetails.age?calclate(userDetails.age):"N/A"}</p>
        </div>
         <div>
            <p>Email:{userDetails.email}</p>
        </div>
         <div>
            <p>Phone:{userDetails.phone}</p>
        </div>
       </div>
       
    </div>
      </div>
  )
}

export default Profile