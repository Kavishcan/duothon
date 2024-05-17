import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Button } from "@/components/ui/button";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Welcome from "./pages/Welcome/Welcome";
import UpdateUser from "./pages/UpdateUser/UpdateUser";
import AddUser from "./pages/AddUser/AddUser";

const Navbar = () => {
  const { login, register, logout } = useKindeAuth();
  const { user } = useKindeAuth();
  const isAdmin = user?.email === "kavishcanvsk@gmail.com";
  console.log(isAdmin);
  return (
    <nav className="p-3 flex items-center justify-between">
      <img src="/logo.png" alt="Logo" className="h-12 mr-4 ml-6" />{" "}
      <ul className="flex justify-center space-x-4 text-slate-600 text-m">
        <li>
          <Link
            to="/welcome"
            className="hover:text-gray-200 transition duration-200"
          >
            Welcome
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-gray-200 transition duration-200">
            Home
          </Link>
        </li>
        <li>
          {isAdmin ? (
            <Link
              to="/dashboard"
              className="hover:text-gray-200 transition duration-200"
            >
              Dashboard
            </Link>
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="gap-10">
        {!user && (
          <Button variant="default" onClick={register} type="button">
            Sign up
          </Button>
        )}
        {!user ? (
          <Button variant="default" onClick={login} type="button">
            Sign in
          </Button>
        ) : (
          <Button variant="default" onClick={logout} type="button">
            Sign out
          </Button>
        )}
      </div>
    </nav>
  );
};

function App() {
  return (
    <KindeProvider
      clientId="cae1ce5b0350465cb66e2def398373ca"
      domain="https://jimmy2002.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/updateUser" element={<UpdateUser />} />
        </Routes>
      </Router>
    </KindeProvider>
  );
}

export default App;
