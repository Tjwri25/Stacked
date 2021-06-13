import React from "react";
import "./index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";


function DevSpotlight() {
  return (
    <Container fluid>
            <Row>
   
              <Col xs="12" lg="4">
                <Card id="dan-card">
                  <Card.Body>
                     <h1>Q&A with Dan Kaltenbaugh</h1>
                    </Card.Body>
                </Card>
              </Col>
           </Row>
      
         <Row>
   
   <Col xs="12" lg="4">
     <Card id="allana-card">
       <Card.Body>
         <h1>Q&A with Allana Anderson</h1>
         </Card.Body>
     </Card>
   </Col>
</Row>

    
   
    </Container>
  );
}

export default DevSpotlight;
