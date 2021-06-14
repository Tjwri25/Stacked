import React from "react";
import SignupForm from "../components/SignUP"
import NavLinks from "../components/Nav"
import BackgroundVid from "../components/Background"
import Footer from "../components/Footer"
import "../components/SignUP/index.css"

function SignUp() {
  return (
    <div className="signupPage">
<BackgroundVid />
<NavLinks/>
  <SignupForm />
  <Footer />
  </div>
  );
}

export default SignUp;

