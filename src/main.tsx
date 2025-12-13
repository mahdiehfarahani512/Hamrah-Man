import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./pages/Login.tsx";

import Password from "./pages/Password.tsx";
import Main from "./pages/Main.tsx";
import Charges from "./pages/Charges.tsx";
import Internet from "./pages/Internet.tsx";
import Parse from "./pages/Parse.tsx";
import Services from "./pages/Services.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/Password",
    element: <Password />,
  },
    {
    path: "/main",
    children:[
      {index:true,element:<Main/>},
      {path:"charge",element:<Charges/>},
      {path:"internet",element:<Internet/>},
      {path:"services",element:<Services/>},
      {path:"parse",element:<Parse/>}
    ]
  },


]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
