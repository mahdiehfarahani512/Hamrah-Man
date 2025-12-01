import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Loginp from './components/Loginp'
import Password from './components/Password'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login/>
    <Loginp/>
    <Password/>
    </>
  )
}

export default App
