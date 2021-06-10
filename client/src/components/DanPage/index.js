import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function DanPage() {
    return (
    <Container>
        <Row>
            <Col></Col>
            <Col xs="12" lg="10">
            <Card>
                <Card.Body>
                <img
                  src="https://user-images.githubusercontent.com/74884495/121227749-ed12aa00-c859-11eb-934f-c17e4a3ddc64.jpg"
                  alt="Dan"
                  id="img-dev"
                  className="d-block mx-auto img-fluid"
                ></img>
              <h2>Dan Kaltenbaugh</h2>
              <h1></h1>
                </Card.Body>
            </Card>
            </Col>
            <Col></Col>
        </Row>
    </Container>
    )
}

export default DanPage