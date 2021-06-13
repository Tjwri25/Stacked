import React, { useState, useEffect } from "react";
import "./index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import NavLinks from "../Nav"


function ArticleCard() {

  const [resources, setResources] = useState([]);
  const [jobArticles, setJobArticles] = useState([]);

  const [intArticles, setIntArticles] = useState([]);

  useEffect(() => {
    console.log("hello");
    getResources();
    getJobArticles();
    getIntArticles();
  }, []);

  const getResources = () => {
    fetch(`/api/articles/resources`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("response data", responseData);
        setResources(responseData);
      });
  };

  const getJobArticles = () => {
    fetch(`/api/articles/job-search`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("response data", responseData);
        setJobArticles(responseData);
      });
  };

  const getIntArticles = () => {
    fetch(`/api/articles/interview-prep`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("response data", responseData);
        setIntArticles(responseData);
      });
  };












  return (
        <Container fluid>
          <div className="abg-image">
            <NavLinks />
          <h1 id="articleHeader">All your resources in one place</h1>

          </div>
      <Row>
      
        <Col xs="12" lg="3">
          <Card id="dan-card">
            <Card.Body>
              <h1 id="qa">Q&A with Dan Kaltenbaugh</h1>

              <a href="/dan" class="stretched-link"></a>
            </Card.Body>
          </Card>
          <Card id="allana-card">
            <Card.Body>
              <h1 id="qa">Q&A with Allana Anderson</h1>
              <a href="/dan" class="stretched-link"></a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card id="jobSearchCard">
            <Card.Body>
              <h2>Find your dream job</h2>
              <ol>
       
              {jobArticles.map( (jobArticles) =>  {
                return (
                <li id="jobRender"><a href={jobArticles.url}>{jobArticles.title}</a></li>
                )
              })}
              
                </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card id="intPrepCard">
            <Card.Body>
              <h2>Interview Prep</h2>

              <ol>
        
              {intArticles.map( (intArticles) =>  {
                return (
                <li id="interviewRender"><a href={intArticles.url}>{intArticles.title}</a></li>
                )
              })}
        
                </ol>
            </Card.Body>
          </Card>
          
        
        </Col>
        <Col xs="12" lg="3">
          <Card id="resourcesCard">
            <Card.Body>
              <h2>Resources</h2>
              <ol>
              {resources.map( (resource) =>  {
                return (
                <li id="resourceRender"><a href={resource.url}>{resource.title}</a></li>
                )
              })}
              
                </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default ArticleCard;
