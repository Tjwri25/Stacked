import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function DevSpotlight() {
  return (
    <Container fluid>
      <Row>
        <Col xs="12" lg="8">
          <Card id="devSpotCard">
<h1>Developer Spotlight</h1>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DevSpotlight;