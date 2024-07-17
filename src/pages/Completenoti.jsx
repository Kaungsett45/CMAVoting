import React from 'react'


export default function Completenoti({ShowCom}) {

 
  return (
        <div  className=" flex flex-col justify-center  my[280px] fixed bg-[#1A8B9C] rounded-lg  inset-x-[520px] h-[160px] ">
              <p className='my-4 text-center text-white text-lg'> Complete notification</p>
        
               <button className='mx-[120px]  py-1 px-6 border rounded ' onClick={ShowCom}>OK</button>
        </div>
  )
}
