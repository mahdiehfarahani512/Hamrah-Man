
import { useNavigate } from "react-router"
import logo1 from "../images/light-logo.svg"
import { useTranslation } from 'react-i18next'
import { useForm } from "react-hook-form"
import { useEffect } from "react"


const Password = () => {
        const {t}=useTranslation()
        const Changepage=useNavigate()
        const { register, setFocus,watch } = useForm({
    defaultValues: {
      phoneNumber1: "",
      phoneNumber2: "",
      phoneNumber3: "",
      phoneNumber4: "",
      phoneNumber5: "",
    },
  });
   useEffect(() => {
    setFocus("phoneNumber1");
  });
  useEffect(() => {
    if(watch("phoneNumber1").length===1){
      setFocus("phoneNumber2")
    }
    if(watch("phoneNumber2").length===1){
      setFocus("phoneNumber3")
    }
    if(watch("phoneNumber3").length===1){
      setFocus("phoneNumber4")
    }
    if(watch("phoneNumber4").length===1){
      setFocus("phoneNumber5")
    }                                       
    if(watch("phoneNumber5").length===1){
      Changepage("/");
    }
  },[watch()]);


  return (
 <div className="flex flex-col bg-[#0095da] w-full h-full pt-40 ">
      <div className="flex flex-col  bg-white justify-between relative px-5 py-8 rounded-t-2xl h-full">
        <div className="flex flex-col">
         <img
            className="w-[110px] h-[74px] absolute -top-2 left-50  -translate-1/2" src={logo1} alt="" />
             <div className="flex flex-col gap-4">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              
              height="20"
              width="20"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5 12H3"
              ></path>
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12.818 4L21 12m0 0l-8.182 8M21 12H11M13 20l5.78-5.78c.82-.82.24-2.22-.919-2.22H9"
              ></path>
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 4l5.78 5.78c.82.82.24 2.22-.919 2.22H9"
              ></path>
            </svg>
            <p className="font-semibold">{t("Enter the verification code")}</p>
            <p className="text-[#1f2937] text-[14px]">
              {t("The 5-digit code has been sent to 09194930291.")}
            </p>
             <div dir="ltr" className="flex justify-between ">
                <input 
                className="w-16 p-2 flex justify-center items-center border border-gray-300 rounded-md"
                {...register("phoneNumber1", {
                  required: true,
                })}
                type="text"
                max={1}
                maxLength={1}
              />
              <input
                className="w-16 p-2 flex justify-center items-center border border-gray-300 rounded-md"
                {...register("phoneNumber2", {
                  required: true,
                })}
                type="text"
                max={1}
                maxLength={1}
              />
              <input
                className="w-16 p-2 flex justify-center items-center border border-gray-300 rounded-md"
                {...register("phoneNumber3", {
                  required: true,
                })}
                type="text"
                max={1}
                maxLength={1}
              />
              <input
                className="w-16 p-2 flex justify-center items-center border border-gray-300 rounded-md"
                {...register("phoneNumber4", {
                  required: true,
                })}
                type="text"
                max={1}
                maxLength={1}
              />
              <input
                className="w-16 p-2 flex justify-center items-center border border-gray-300 rounded-md"
                {...register("phoneNumber5", {
                  required: true,
                })}
                type="text"
                max={1}
                maxLength={1}
              />
        
          </div>
        
            </div>
  </div>
  <div className="flex flex-col gap-2">
          <p className="text-center text-[14px] text-gray-400 pb-6 flex justify-center items-center gap-2 mt-100">
            <svg
              fill="none"
              viewBox="0 0 21 20"
              xmlns="http://www.w3.org/2000/svg"
              
              height="20"
              width="20"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#374151"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.444 9.86H5.5m.285.973L7.16 8.89m-1.375 0l1.375 1.944M11.472 9.86H9.528m.285.973l1.374-1.944m-1.374 0l1.374 1.944M15.5 9.86h-1.944m.284.973l1.375-1.944m-1.375 0l1.375 1.944M10.5 15H15a3 3 0 003-3V8a3 3 0 00-3-3h-.75m-7.5 10H6a3 3 0 01-3-3V8a3 3 0 013-3h4.5M12.167 16.667L10.5 15m0 0l1.667-1.667M10.5 15h2.778"
              ></path>
              <path
                stroke="#374151"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.167 13.333v0c-.615.615-.18 1.667.69 1.667H13M12.167 16.667v0c-.615-.615-.18-1.667.69-1.667H13M9.111 3.333L10.778 5m0 0L9.11 6.667M10.778 5H8M9.111 6.667v0C9.726 6.05 9.291 5 8.421 5h-.143"
              ></path>
              <path
                stroke="#374151"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.111 3.333v0c.615.615.18 1.667-.69 1.667h-.143"
              ></path>
            </svg>
            {t("Resend verification code")}
            </p>
           
            </div>
<button
        onClick={()=>{Changepage("/Main")}}
        className="text-white bg-[#0095da] py-7 w-full h-7 flex items-center justify-center rounded-[8px]  hover:opacity-80 cursor-pointer transition-all  ">
          {t("Verify and continue"
)}
        </button>
        <div className="flex gap-2 mt-4 items-center justify-center">
          <p
            onClick={() => {
              Changepage("Loginp");
            }}
            className="text-[14px] text-[#1f2937] "
          >
        
            {t("Login with Password")}
          </p>

          <svg
            fill="#000000"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20px"
            height="20px"
            viewBox="0 0 70 70"
            enable-background="new 0 0 70 70"
            xml:space="preserve"
          >
            <g>
              <path
                d="M46.857,8.583H24.099c-11.197,0-21.516,9.339-21.516,20.535v0.8c0,9.596,7.292,17.658,16.251,19.77l-0.966,7.311
		c-0.28,1.615,0.606,3.238,2.004,4.095c0.643,0.394,1.442,0.589,2.164,0.589c0.847,0,1.729-0.591,2.438-1.122l14.247-10.977h8.137
		c11.197,0,19.726-8.467,19.726-19.665v-0.8C66.583,17.922,58.055,8.583,46.857,8.583z M62.583,29.918
		c0,9.007-6.721,15.665-15.726,15.665h-9.47L22.112,57.36l1.382-11.295c-9.006,0-16.912-7.141-16.912-16.147v-0.8
		c0-9.005,8.51-16.535,17.516-16.535H46l0.231,0.076c9.006,0,16.352,7.454,16.352,16.459V29.918z"
              />
              <path
                d="M19.441,18.422c0.573-0.098,1.164-0.147,1.756-0.147c0.553,0,1-0.447,1-1s-0.447-1-1-1c-0.704,0-1.407,0.059-2.092,0.175
		c-0.544,0.093-0.91,0.609-0.818,1.154c0.083,0.487,0.507,0.832,0.985,0.832C19.328,18.436,19.385,18.431,19.441,18.422z"
              />
              <path
                d="M16.284,17.092c-4.357,1.95-7.701,6.568-7.701,11.491v0.152c0,0.553,0.447,1,1,1s1-0.447,1-1v-0.152
		c0-4.147,2.816-8.032,6.464-9.665c0.505-0.226,0.887-0.817,0.661-1.321C17.482,17.093,16.786,16.867,16.284,17.092z"
              />
              <path
                d="M23.361,26.247c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S25.843,26.247,23.361,26.247z
		 M23.361,33.247c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5S24.74,33.247,23.361,33.247z"
              />
              <path
                d="M35.361,26.247c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S37.843,26.247,35.361,26.247z
		 M35.361,33.247c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5S36.74,33.247,35.361,33.247z"
              />
              <path
                d="M47.361,26.247c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S49.843,26.247,47.361,26.247z
		 M47.361,33.247c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5S48.74,33.247,47.361,33.247z"
              />
            </g>
          </svg>
        </div>
     
  </div>
  </div>     
)
}

export default Password