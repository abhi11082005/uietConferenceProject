import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Github from './components/Github'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='github' element={<Github />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
