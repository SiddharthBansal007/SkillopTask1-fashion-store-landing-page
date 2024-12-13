import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Bottom = () => {
  return (
    <>
    <div className='w-full gap-4 flex flex-col'>

        <h2 className='px-28 text-2xl font-normal'>Subscribe to our emails</h2>
        
        <div className='w-full mb-10 flex justify-between px-28'>
            <div class="flex flex-col ">
                <input id="email" type="text" placeholder="Email" class="w-[300px]  border-gray-300 rounded-lg p-2" />
            </div>
            <div className='flex items-center gap-2'>
                <FaFacebook className=' text-3xl' />
                <FaInstagram className=' text-3xl' />
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Bottom
