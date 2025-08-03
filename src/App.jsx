import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from './component/Layout.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
