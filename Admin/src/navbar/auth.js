import Header from "../components/Header"; //Include Header

import Dashboard from "../components/Dashboard";

import { Routes, Route } from "react-router-dom";

import AuthUser from "../components/AuthUser";
import Buses from "../components/Buses";
import Offres from "../components/offres";
function Auth() {
  const { token, logout } = AuthUser();
  const logoutUser = () => {
    if (token != undefined) {
      logout();
    }
  };
  return (
    
      <div className="App">
        <Header></Header>
        <main class="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          
            <Route path="/buses" element={<Buses />} />
            <Route path="/offres" element={<Offres />} />
          </Routes>
        </main>
      </div>
  );
}

export default Auth;
