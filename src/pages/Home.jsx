import React from 'react'
import Dashboard from '../components/Dashboard'
import Aboutme from '../components/Aboutme'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Work from '../components/Work'
import Contact from '../components/Contact'

function Home() {
  return (
    <div>
      <Dashboard/>
      <Aboutme/>
      <Skills/>
      <Project/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default Home