import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Services from './Services'
import Work from './Work'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Footer from './Footer'
import Contactus from './Contactus'
import LoanForm from './LoanForm'
import Signup from './auth/Signup'
import Sigin from './auth/Sigin'
import Auth from './routes/Auth'
import IsLogin from './routes/IsLogin'
import Pagenotfound from './auth/Pagenotfound'

import InputOtp from './auth/InputOtp'
import Otproute from './routes/Otproute'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Routes>


<Route element ={<Auth/>}>

    <Route path="/" element={<><Navbar/>,<Home />,<Services/>,<Work/>,<About/>,<Footer/></>} />
  <Route path="/services" element={<><Navbar/>,<Services />,<Footer/></>} />
  <Route path="/work" element={<><Navbar/>,<Work />,<Footer/></>} />
  <Route path='/about' element={<><Navbar/>,<About/>,<Footer/></>}></Route>
    <Route path="/contactus" element={<><Navbar/>,<Contactus/>,<Footer/></>} />
  <Route path='/loanform' element={<><Navbar/>,<LoanForm/>,<Footer/></>} />
</Route>


     <Route element = {<IsLogin/>} >
  <Route path="/signup" element={<><Signup/></>} />

  <Route path="/sigin" element={<><Sigin/></>} />

 </Route>
<Route element = {<Otproute/>}>
  <Route path='/Otp' element={<InputOtp/>} />
</Route>

<Route path='*' element = {<Pagenotfound/>}></Route>
 
</Routes>
 
    </>
  )
}

export default App
