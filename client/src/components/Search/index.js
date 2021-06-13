import React, { useState } from "react";
import "./index.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";




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
   
  
  <div className="searchPage">
    

      <Container  fluid>
     
        <Row>
       
          <Col xs="12" lg="3"> 
          <Card id="searchCard" className="text-center">
            <Card.Body>
           <p>Search for a topic, and view the activity it was first introduced,
              other acitvities it was used in, and the appropriate
              documentation.</p>
            <Form id="searchbar" inline>
              <Form.Control
                type="text"
                placeholder="ex. array"
                className="mr-sm-2"
                onChange={handleInputChange}
              /> 
            </Form>
            <Button
              id="searchbutton"
              variant="outline-success"
              onClick={getData}
              className="justify-content-center"
            >
              Search
            </Button>
      
            </Card.Body>
            </Card>
          </Col>
  
        <Col xs="12" lg="9">
         <Card id="dataCard">
        
        {dataState.data?._id && <ul>
        <h1 id="titleRender">{dataState.data.title}</h1>
           <h2>Docs:</h2>
            <p id="searchRender"><a href={dataState.data.docs}>{dataState.data.docs}</a> </p>
            <h2>Introduced:</h2>
            <p id="searchRender">{dataState.data.introduced}</p>
            
            <h2>Used:</h2>
            <p id="searchRender">{dataState.data.used}</p>
          
          </ul>}
        
       
          </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      </div>
  );
}
export default SearchPage;