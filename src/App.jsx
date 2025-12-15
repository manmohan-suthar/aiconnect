import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import AuthPage from "./pages/auth/AuthPage.jsx"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage/>} />
    </Routes>
  )
}

export default App
