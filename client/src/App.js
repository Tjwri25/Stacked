import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navlinks from "./components/Nav"
import Home from "./pages/Home"
import Search from "./pages/Search";
import Articles from "./pages/Articles";
import Dan from "./pages/Dan"

import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
         <Router>
      <div>
        <Navlinks />
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/articles">
            <Articles />
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
          <Route exact path="/dan">
            <Dan />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
