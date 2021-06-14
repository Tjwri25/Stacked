import React from "react";
import LoginForm from "../components/Login"
import NavLinks from "../components/Nav"
import Footer from "../components/Footer"

import BackgroundVid from "../components/Background"

function Login() {
  return (
    <div className="loginPage">
      <BackgroundVid />
      <NavLinks />
   <LoginForm />
  <Footer />
   </div>
  );
}

export default Login;
