import React from 'react'
import logo1 from "../images/light-logo.svg"
import { useTranslation } from 'react-i18next'


const Password = () => {
        const {t}=useTranslation()
  return (
     <div className='bg-[#0095da] w-full h-screen flex flex-col justify-center items-center relative'>
  
        <div className=' bg-white rounded-[10px] w-[460px] h-[430px] relative p-9'>
             <img className='absolute -top-20 right-[150px] w-[160px]' src={logo1} alt="" />
             <div className='flex justify-end '>
                <svg width="20px" height="20px" viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z"/></svg>
                   </div>
                   <div>
                    <p className='text-[#0b0b0d] text-[16px] font-semibold'>{t("Enter the verification code")}</p>
                    <p className='text-[#1f2937] text-[13px] text-right mt-3'></p>
                   </div>
  </div>
  <div className='bg-white w-full h-[80px] absolute bottom-0 left-0 '>
    <div className='h-[50px] w-full border-b-1 border-b-gray-300'>



    </div>

</div>

  </div>
  )
}

export default Password