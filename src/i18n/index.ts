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
      "Enter the verification code":"Enter the verification code",
      "The 5-digit code has been sent to 09194930291.":"The 5-digit code has been sent to 09194930291.",
      "Resend verification code":"Resend verification code",
      "Verify and continue":"Verify and continue",
      "mycharge":"mycharge",
      "lastCharge":"lastCharge",
      "transferCredit":"transferCredit",
      "allLastCharge":"allLastCharge",
      "allLastChargeMoney":"allLastChargeMoney",
      "uniqueMoney":"uniqueMoney",
      "normal":"normal",
      "perfect":"perfect",
      "perfectMoney":"perfectMoney",
      "loyal":"loyal",
      "loyalMoney":"loyalMoney",
      "womenGift":"womenGift",
      "womenGiftMoney":"womenGiftMoney",
      "preambleMore":"preambleMore",
      "buyANewCharge":"buyANewCharge",
      "pleaseEnterYourPhoneNumber":"pleaseEnterYourPhoneNumber",
      "realPhone":"realPhone",
      "youMustWriteRealPhoneNumber":"youMustWriteRealPhoneNumber",
      "pleaseChoseYourAmount":"pleaseChoseYourAmount",
       "amount":"amount",
        "amount1":"10.000",
        "amount2":"20.000",
        "amount3":"30.000",
        "amount4":"50.000",
        "amount5":"70.000",
        "amount6":"100.000",
        "transfer":"transfer",
        "home":"home",
        "title2":"title2",
        "packages":"packages",
        "work":"work",
        "parse":"parse",
        "myInternet":"myInternet",
        "internet":"internet",
        "conversetion":"conversetion",
        "message":"message",
        "parseStock":"parseStock",
        "therIsNoMoneyInYourParse":"therIsNoMoneyInYourParse",
        "increaseStock":"increaseStock",
        "listBills":"listBills",
        "thereIsNoBill":"thereIsNoBill",
        "ithereIsNoPackege":"ithereIsNoPackege",
        "buyANewPackege":"buyANewPackege",
        
     

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
      "Enter the verification code":"کد تایید را وارد کنید",
      "The 5-digit code has been sent to 09194930291.":"کد 5 رقمی به شماره 09194930291 ارسال شد.",
      "Resend verification code":"دریافت مجدد کد تایید",
      "Verify and continue":"تایید و ادامه",
      "mycharge":"شارژ من",
      "lastCharge":"مانده شارژ",
      "transferCredit":"انتقال شارژ",
      "allLastCharge":"کل مانده شارژ",
      "allLastChargeMoney":"250.558",
      "uniqueMoney":"ریال",
      "normal":"عادی",
      "perfect":"فوق العاده",
      "perfectMoney":"0",
      "loyal":"وفاداری",
      "loyalMoney":"0",
      "womenGift":"هدیه شارژ بانوان",
      "womenGiftMoney":"0",
      "preambleMore":"توضیحات بیشتر",
      "buyANewCharge":"خرید شارژ جدید",
      "pleaseEnterYourPhoneNumber":"لطفا شماره تلفن خود را وارد کنید",
      "realPhone":"شماره اعتباری",
      "youMustWriteRealPhoneNumber":"شماره تلفن همراه اعتباری لازم است.",
       "pleaseChoseYourAmount":"مبلغ انتقال را انتخاب کنید.",
        "amount":"مبلغ (ریال)",
        "amount1":"10.000",
        "amount2":"20.000",
        "amount3":"30.000",
        "amount4":"50.000",
        "amount5":"70.000",
        "amount6":"100.000",
        "transfer":"انتقال",
        "home":"خانه",
        "title2":"شارژ",
        "packages":"بسته ها",
        "work":"خدمات",
        "parse":"کیف پول",
        "myInternet":"بسته های من",
        "internet":"اینترنت", 
        "conversetion":"مکالمه",
        "message":"پیامک",
        "parseStock":"موجودی کیف پول",
        "therIsNoMoneyInYourParse":"کیف پول شما خالی نیست",
        "increaseStock":"افزایش موجودی",
        "listBills":"لیست تراکنش",
        "thereIsNoBill":"تراکنشی وجود ندارد",
        "ithereIsNoPackege":"بسته ای وجود ندارد",
        "buyANewPackege":"خرید بسته جدید",

     
      



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
