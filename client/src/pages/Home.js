import React from "react";
import HomePage from "../components/Home";
import "../components/Home/index.css";
import NavLinks from "../components/Nav";

function Home() {
  return (
    <div className="homePage">
      <NavLinks />
      <HomePage />
    </div>
  );
}

export default Home;
