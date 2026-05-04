import React from 'react'
import Navbar from './components/Navbar.jsx'
import MainBanner from './components/MainBanner.jsx'
import Services from './components/Services.jsx'
import BottomVideo from './components/BottomVideo.jsx'
import Footer from './components/Footer.jsx'
import Contact from './pages/Contact.jsx'
import { Route,Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Works from './components/Works.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Home/>}/>
        <Route path='/Works' element={<Works/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
