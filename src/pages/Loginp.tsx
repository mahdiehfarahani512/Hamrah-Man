import React, { useState } from 'react'
import logo1 from "../images/light-logo.svg"
import { useTranslation } from 'react-i18next'

const Loginp = () => {
      const {t}=useTranslation()
      
  return (
   <div className='bg-[#0095da] w-full h-screen flex flex-col justify-center items-center relative'>
  
        <div className=' bg-white rounded-[10px] w-[460px] h-[430px] relative p-9'>
             <img className='absolute -top-20 right-[150px] w-[160px]' src={logo1} alt="" />
             <div className='flex flex-col text-right gap-2'>
                <span className='text-[#0b0b0d] text-[16px] font-semibold'>{t("Login with Password")}</span>
                <span className="whitespace-nowrap text-gray-700  text-[13px] ">{t("Enter your mobile number and password.")}</span>
             </div>
             
<div className="border border-gray-300 rounded-[10px] p-2 w-full mt-6 flex flex-row-reverse items-center gap-3 justify-between">
  
  <span className="whitespace-nowrap text-gray-400  ">{t("phone number")}</span>

 
  


  <input
    type="text"
    className="w-40 p-1 text-center focus:outline-none"
  />


<div >
    <span className="text-gray-400 ">+98</span>
    <span className='text-gray-600'>|</span>
  </div>
  
</div>
           
<div className="border border-gray-300 rounded-[10px] p-2 w-full mt-6 flex flex-row-reverse items-center gap-3 justify-between">
  <span className="whitespace-nowrap text-gray-400  ">{t("password")}</span>
  <input
    type="text"
    className="w-40 p-1  focus:outline-none"/> 
</div>

      <button className='text-white bg-[#0095da] py-7 w-full h-7 flex items-center justify-center rounded-[8px] mt-13 hover:opacity-80 cursor-pointer transition-all ' >{t("log in")}</button>

<div className=' flex justify-around'>
    <div>
      <p className='text-[14px] text-[#1f2937] '> {t("Login with One-Time Password")}</p>
</div>
    <div>
   <p className='text-[14px] text-[#1f2937] '> {t("Forgot Password")}</p>
    </div>

</div>

</div>
<div className='bg-white w-full h-[80px] absolute bottom-0 left-0 '>
    <div className='h-[50px] w-full border-b-1 border-b-gray-300'>



    </div>

</div>
</div>
  )
}

export default Loginp