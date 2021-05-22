import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Articles from "./pages/articles";
import CommunityBoard from "./pages/community-board";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route exact path="/community-board">
            <CommunityBoard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
