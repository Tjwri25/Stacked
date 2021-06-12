import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css";

function Navlinks() {
  return (


<Row>
     <Col>
  <Navbar>
  <Navbar.Brand href="/">
  <img
            src="https://user-images.githubusercontent.com/74884495/121584961-08b7b500-ca00-11eb-8e19-bb4e61e8ce22.png"
            alt=""
            width="300"
            height="100"
            className="d-inline-block align-text-top"
          ></img>
  </Navbar.Brand>
  </Navbar>
  </Col>
<Col></Col>
<Col>
<Nav className="justify-content-end">
    <Nav.Item>
      <Nav.Link id="navlink" href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link id="navlink" href="/search">Search</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link id="navlink" href="/articles">Articles</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link id="navlink" href="/login">Log In</Nav.Link>
    </Nav.Item>
  </Nav>
</Col>
</Row>





  );
}

export default Navlinks;
