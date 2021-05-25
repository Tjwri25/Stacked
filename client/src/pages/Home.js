import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <Container fluid>
      <Row>
          <Col></Col>
        <Col xs lg="8">
          <div id="homebody">You <br></br>
          Stuck?</div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
     <Col></Col>
     <Col></Col>
     <Col xs lg="6">
         <div id="homebody2">You're in the right place.</div>
     </Col>
        
      </Row>
    </Container>
  );
}

export default Home;
