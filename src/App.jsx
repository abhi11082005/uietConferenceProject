import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Github from './components/Github'
import RegistrationFormwa from './components/Registerationwa'
import 'swiper/css';
import 'swiper/css/autoplay';
import AdvisoryCommittee from './tools/AdvisoryComittee'
import Speaker from './components/Speaker'
import ImportantDates from './components/ImportantDates'
import SubmissionGuideline from './components/SubmissionGuideline'
import Kanpur from './components/Kanpur'
import Publication from './components/Publication'

function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='registration' element={<RegistrationFormwa />} />
            <Route path='advisory-committee' element={<AdvisoryCommittee />} />
            <Route path='about' element={<About />} />
            <Route path='speakers' element={<Speaker />} />
            <Route path='contact' element={<Contact />} />
            <Route path='important-dates' element={<ImportantDates />} />
            <Route path='submission-guidelines' element={<SubmissionGuideline />} />
            <Route path='kanpur' element={<Kanpur />} />
            <Route path='publication' element={<Publication />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
