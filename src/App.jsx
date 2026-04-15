import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Navbar/>
    <div>
      <Routes>
          <Route path ='/' element ={<Home/>}  />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
