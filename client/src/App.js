import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Greet />
    </div>
  );
}

export default App;
