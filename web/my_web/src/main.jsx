import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import Nav from './nav.jsx'
import ProfileCard from './profilecard.jsx'
import AboutMe from './AboutMe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <ProfileCard/>
    <AboutMe/>
  </StrictMode>,
)
