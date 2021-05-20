import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Header from "./components/Header"
import TemporaryDrawer from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Header />
      <Greet />
      <TemporaryDrawer />
    </div>
  );
}

export default App;
