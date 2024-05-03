import Navbar from './Components/Nabar'
import Home from './Pages/Home'
import About from './Pages/About'
import Careers from './Pages/Careers'
import Expertise from './Pages/Expertise'
import { Routes, Route } from 'react-router-dom'




export default function App(){
  return(
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Careers' element={<Careers/>}/>
        <Route path='/Expertise' element={<Expertise/>}/>
      </Routes>
    </div>
  )
}