import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./index.css"


function HomePage() {
  return (
    <div className="homePage">
  
      <Row>
        <Col lg="1"></Col>
        <Col xs lg="8">
        <img
                  src="https://user-images.githubusercontent.com/74884495/121583140-e0c75200-c9fd-11eb-9e68-b9330c3ff261.png"
                  id="homeImage"
                  alt="rightplace"
                  // className="d-block mx-auto img-fluid"
                ></img>
        </Col>
        <Col></Col>
      </Row>
      <Row>
     <Col></Col>
     <Col></Col>
     <Col xs lg="6">
         {/* <div id="homebody2">You're in the right place.</div> */}
     </Col>
        
      </Row>
   
    </div>
  );
}

export default HomePage;
