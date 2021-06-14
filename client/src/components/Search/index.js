import React, { useState } from "react";
import "./index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavLinks from "../Nav";

import InputGroup from "react-bootstrap/InputGroup";

function SearchPage() {
  const [dataState, setDataState] = useState({
    data: {},
    sortValue: "",
    inputValue: "",
  });
  const handleInputChange = (event) => {
    setDataState({
      inputValue: event.target.value,
    });
  };
  const getData = () => {
    console.log(dataState.inputValue);
    fetch(`/api/activityData/${dataState.inputValue}`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setDataState({
          ...dataState,
          data: responseData,
        });
      });
  };
  return (
    <>
      <Container fluid>
        <div className="bg-image">
          <NavLinks />
          <Row>
            <Col></Col>
            <Col xs="12" lg="6">
              <Card id="searchCard" className="text-center">
                <Card.Body>
                  <p id="searchHeader">Let's find what you're looking for</p>
                  <p>
                    Search for a topic, and view the activity it was first
                    introduced, other activities it was used in, and the
                    appropriate documentation.
                  </p>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="ex. array"
                      className="mr-sm-2"
                      onChange={handleInputChange}
                    />
                    <InputGroup.Append>
                      <Button
                        id="searchbutton"
                        onClick={getData}
                        className="justify-content-center"
                      >
                        Search
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </div>
        <Row>
          <Col></Col>

          <Col xs="12" lg="8">
    
            <Card id="dataCard">
              {dataState.data?._id && (
                <ul>
                  <h1 id="titleRender">{dataState.data.title}</h1>
                  <h2>Introduced:</h2>
                  <p id="searchRender">{dataState.data.introduced}</p>

                  <h2>Other Examples:</h2>
                  <p id="searchRender">{dataState.data.used}</p>
                  <h2>Docs:</h2>
                  <p id="searchRender">
                    <a href={dataState.data.docs}>{dataState.data.docs}</a>{" "}
                  </p>
                </ul>
              )}
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
export default SearchPage;
