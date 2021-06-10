import React from "react";
import "../../index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";


function DevSpotlight() {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs="12" lg="8">
          <Card id="devSpotCard">
            <h1 id="devSpotContent">Developer Spotlight</h1>
            <Row>
   
              <Col xs="12" lg="4">
                <img
                  src="https://user-images.githubusercontent.com/74884495/121227749-ed12aa00-c859-11eb-934f-c17e4a3ddc64.jpg"
                  alt="Dan"
                  id="img-dev"
                  className="d-block mx-auto img-fluid"
                ></img> 
                {""}
               <p id="link-dev"> <a href="/dan">Dan Kaltenbaugh</a> </p>
              </Col>
           
              <Col xs="12" lg="4">
                <img
                  src="https://user-images.githubusercontent.com/74884495/121228875-4929fe00-c85b-11eb-849a-be669f051be2.jpg"
                  alt="Nikki"
                  id="img-dev"
                  className="d-block mx-auto img-fluid"
                ></img>
                <p id="link-dev"> <a href="/nikki">Nikki Castle</a> </p>
              </Col>
         
              <Col xs="12" lg="4">
                <img
                  src="https://user-images.githubusercontent.com/74884495/121231264-32d17180-c85e-11eb-8791-fb9bc6a86da2.jpg"
                  alt="Allana"
                  id="img-dev"
                  className="d-block mx-auto img-fluid"
              
                ></img>
                <p id="link-dev"> <a href="/allana">Allana Anderson</a> </p>
              </Col>
         
            </Row>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default DevSpotlight;
