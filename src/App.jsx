import './App.css'
import Navbar from './Components/Nabar'
import Home from './Pages/Home'
import About from './Pages/About'
import Careers from './Pages/Careers'
import Expertise from './Pages/Expertise'

import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Contact from './Pages/Contact'




export default function App(){
  return(
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Careers' element={<Careers/>}/>
          <Route path='/Expertise' element={<Expertise/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}