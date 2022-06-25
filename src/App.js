import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ShareLayout from './pages/ShareLayout'
import "./style.css";
import News from './pages/News';
import Home from './pages/Home';
import Contact from "./pages/Contact"
import About from "./pages/About";
import Person1 from './pages/Person';
export default function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<ShareLayout/>}>
          <Route index element={<Home />}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/about' element={<Contact/>}/>
          <Route path='/contact' element={<About/>}/>
          <Route path='/person/:personId' element={<Person1/>}/>
           <Route path='*' element={<h1>404 NOT FOUND.</h1>}/>
           </Route>
       </Routes>
    </BrowserRouter>
  )
}
