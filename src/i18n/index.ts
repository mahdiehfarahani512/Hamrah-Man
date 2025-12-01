import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "sign up": "sign up for free",
      "log in":"log in for free",
      "Hello, please enter your mobile phone number.":"Hello, please enter your mobile phone number.",
      "phone number":"phone number",
      "Confirm & Get Code":"Confirm & Get Code",
      "Login with Password":"Login with Password",
      "Enter your mobile number and password.":"Enter your mobile number and password.",
      "password":"password",
      "Forgot Password":"Forgot Password",
      "Login with One-Time Password":"Login with One-Time Password",
      "Enter the verification code":"Enter the verification code"

    }
  },
  fa: {
    translation: {
      "Welcome to React": "به ری‌اکت خوش آمدید",
      "sign up": "ثبت نام",
      "log in":"ورود",
      "Hello, please enter your mobile phone number.":"سلام، لطفا شماره تلفن همراه خود را وارد کنید.",
      "phone number":"تلفن همراه",
      "Confirm & Get Code":"تایید و دریافت کد",
      "Login with Password":"ورود با رمز عبور",
      "Enter your mobile number and password.":"شماره تلفن همراه و رمز عبور خود را وارد کنید.",
      "password":"رمز عبور",
      "Forgot Password":"فراموشی رمز عبور",
      "Login with One-Time Password":"ورود با رمز یکبار مصرف",
      "Enter the verification code":"کد تایید را وارد کنید"

    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fa",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
