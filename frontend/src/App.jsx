import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import Dashboard from "./pages/Dashboard/Dashboard"

const Navbar = () => {
  return (
    <nav className=" p-3 flex items-center">
      <img src="/logo.png" alt="Logo" className="h-12 mr-4 ml-6" />{" "}
      {/* adjust size as needed */}
      <ul className="flex justify-around text-slate-600 text-lg">
        <li>
          <Link to="/" className="hover:text-gray-200 transition duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="hover:text-gray-200 transition duration-200"
          >
            Dashboard
          </Link>
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
