import React from "react";
import "../index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Search() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col></Col>

          <Col xs lg="8">
            <div id="searchbody">
              Search for a topic, and view the activity it was first introduced,
              other acitvities it was used in, and the appropriate
              documentation.{" "}
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col xs lg="6">
            <Form id="searchbar" inline>
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
            <Button id="searchbutton" variant="outline-success">Search</Button>
            </Col>
            <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
