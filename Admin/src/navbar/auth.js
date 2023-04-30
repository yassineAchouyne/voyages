import Header from "../components/Header"; //Include Header
import Footer from "../components/Footer"; //Include Footer
import Dashboard from "../components/Dashboard";
import Settings from "../components/Settings";
import Tables from "../components/Tables";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";
import { Routes, Route } from "react-router-dom";

import AuthUser from "../components/AuthUser";
import Buses from "../components/Buses";
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
            <Route path="/settings" element={<Settings />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/buses" element={<Buses />} />
          </Routes>
        </main>
      </div>
  );
}

export default Auth;
