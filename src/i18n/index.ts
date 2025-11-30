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
      "Login with Password":"Login with Password"

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
      "Login with Password":"ورود با رمز عبور"

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
