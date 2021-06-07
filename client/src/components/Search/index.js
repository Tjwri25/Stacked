import React, { useState } from "react";
import "../../index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    <div>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col xs lg="8">
            <div id="searchbody">
              Search for a topic, and view the activity it was first introduced,
              other acitvities it was used in, and the appropriate
              documentation.{""}
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
                onChange={handleInputChange}
              />
            </Form>
            <Button
              id="searchbutton"
              variant="outline-success"
              onClick={getData}
            >
              Search
            </Button>
          </Col>
          <Col>{dataState.data?._id && <ul>
           <li> Title: {dataState.data.title}</li>
            <li>Docs: {dataState.data.docs}</li>
            <li>Introced: {dataState.data.introduced}</li>
            <li>Used: {dataState.data.used}</li>
          
          </ul>}</Col>
        </Row>
      </Container>
    </div>
  );
}
export default SearchPage;