import { useNavigate } from "react-router";
import logo1 from "../images/light-logo.svg";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Login = () => {
  const { t } = useTranslation();
  const Changepage = useNavigate();
  
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    mode:"onChange",
    defaultValues: {
      phoneNumber: "",
    },
  });

  return (
    <div className="bg-[#0095da] w-full h-screen flex flex-col justify-center items-center relative pt-45">
      <div className=" bg-white rounded-[10px] w-[440px] h-[750px] relative p-9 rounded-t-[30px]">
        <img
          className="absolute -top-10 right-[180px] w-[90px]"
          src={logo1}
          alt=""
        />

        <div className=" flex items-center gap-1 justify-end">
          <span className="text-[#0b0b0d] text-[16px] font-semibold">
            {t("log in")}
          </span>
          <span className="text-gray-400  ">|</span>
          <span className="text-[#0b0b0d] text-[16px] font-semibold">
            {t("sign up")}
          </span>
        </div>

        <div>
          <p className="text-[#1f2937] text-[13px] text-right mt-3">
            {t("Hello, please enter your mobile phone number.")}
          </p>
        </div>

        <div className="border border-gray-300 rounded-[10px] p-2 w-full mt-6 flex flex-row-reverse justify-between items-center gap-3">
          <span className="whitespace-nowrap text-gray-400  ">
            {t("phone number")}
          </span>

          <div className="flex flex-col">
            <input
              max={11}
              maxLength={11}
              {...register("phoneNumber", {
                maxLength: 11,
                required: true,
              })}
              type="text"
              className="w-40 p-1  focus:outline-none"
            />
            <div>
              <span>
                {errors.phoneNumber && "please check your numberPhone"}
              </span>
            </div>
          </div>

          <div className=" flex ">
            <span className="text-gray-400 ">+98</span>
            <span className="text-gray-600">|</span>
          </div>
        </div>

        <button className="text-white bg-[#0095da] py-7 w-full h-7 flex items-center justify-center rounded-[8px] mt-13 hover:opacity-80 cursor-pointer transition-all mt-[430px] ">
          {t("Confirm & Get Code")}
        </button>
        <div className="flex gap-2 mt-4 items-center justify-center">
          <p
            onClick={() => {
              Changepage("Loginp");
            }}
            className="text-[14px] text-[#1f2937] "
          >
            {" "}
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
  );
};

export default Login;
