import React from 'react'

const UpdateProfile = ({setIsFormEnable}) => {
    console.log(setIsFormEnable,"setFormenable")
   
  return (
    <div  className=' absolute h-[500px]  w-[500px] bg-white   shadow-2xl left-[25%]  ' >
         <div className='flex justify-end mr-2'>
             <button onClick={()=>setIsFormEnable(false)}>close</button>
         </div>
         <div>
             <form>
                 <div>helo</div>
             </form>
         </div>
    </div>
  )
}

export default UpdateProfile