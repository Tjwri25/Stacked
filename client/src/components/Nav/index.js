import React from 'react';
import OpenNav from "./openNav";
import CloseNav from "./closeNav"
import "./style.css"


function Nav() {
    return (
<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
      <img src="https://user-images.githubusercontent.com/74884495/118894209-0bbbfb80-b8c1-11eb-8e5e-e09bddfefc2a.png" alt="" width="300" height="100" className="d-inline-block align-text-top"></img>
      </a>
    </nav>




        <div>
<div id="mySidenav" className="sidenav">
  <a href="javascript:void(0)" className="closebtn" onClick={CloseNav}>&times;</a>
  <a href="#">Search</a>
  <a href="#">Articles</a>
  <a href="#">Community Board</a>
  <a href="#">Log In</a>

</div>

<span onClick={OpenNav}>open</span>
</div>


</div>

)
}

export default Nav