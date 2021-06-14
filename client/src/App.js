import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home"
import Search from "./pages/Search";
import Articles from "./pages/Articles";
import Articles2 from "./pages/Articles2";
import Dan from "./pages/Dan";
import ArticleForm2 from "./pages/ArticleForm2";
import Allana from "./pages/Allana"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
       
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route exact path="/articles2">
            <Articles2 />
          </Route>
          <Route exact path="/dan">
            <Dan />
          </Route>
          <Route exact path="/allana">
            <Allana />
          </Route>
          <Route exact path="/addarticleForm">
            <ArticleForm2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
