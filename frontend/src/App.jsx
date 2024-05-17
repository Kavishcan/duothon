import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import Dashboard from "./pages/Dashboard/Dashboard"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
