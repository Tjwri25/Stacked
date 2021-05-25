import React from "react";
import OpenNav from "./openNav";
import CloseNav from "./closeNav";
import "./style.css";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">
          <img
            src="https://user-images.githubusercontent.com/74884495/119537012-de4ed200-bd46-11eb-8fcc-0a6f8252440f.png"
            alt=""
            width="300"
            height="100"
            className="d-inline-block align-text-top"
          ></img>
        </a>
      </nav>

      <div>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={CloseNav}>
            &times;
          </a>
          <a href="/">Home</a>
          <a href="/search">Search</a>
          <a href="/articles">Articles</a>
          <a href="/communityboard">Community Board</a>
          <a href="/login">Log In</a>
        </div>

        <span className="openbtn" onClick={OpenNav}>
          <div className="hmbgrMenu"></div>
          <div className="hmbgrMenu"></div>
          <div className="hmbgrMenu"></div>
        </span>
      </div>
    </div>
  );
}

export default Nav;
