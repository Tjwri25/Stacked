import React, { useState, useEffect } from "react";
import "../ArticleCard/index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import NavLinks2 from "../Nav2"


function ArticleCard2() {

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
    fetch(`/api/articles/resources`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
    }
    )
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
         <NavLinks2 />
            <Card id="articleHeaderCard"  className="text-center">
              <Card.Body>
          <h1 id="articleHeader">All your resources in one place</h1>
          <p>Articles for every stage of developing</p>
          </Card.Body>
          </Card>
          </div>
      <Row>
      <Col lg="12">
            <h1 id="artFormLink">
      Wanna add to greatness? add a resource
      <a href="/addarticleForm"> here</a>
    </h1>
    </Col>
        <Col xs="12" lg="4">
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
        <Col xs="12" lg="4">
          <Card id="intPrepCard">
            <Card.Body>
              <h2>Nail your interview</h2>

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
        <Col xs="12" lg="4">
          <Card id="resourcesCard">
            <Card.Body>
              <h2>Need help? Look here</h2>
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
      <Row>
        <Col lg="3"></Col>
        <Col xs="12" lg="3">
          <Card id="dan-card">
            <Card.Body>
              <h1 id="qa">Q&A with Dan Kaltenbaugh</h1>

              <a href="/dan" class="stretched-link">.</a>
            </Card.Body>
          </Card>
          </Col>
          <Col xs="12" lg="3">
          <Card id="allana-card">
            <Card.Body>
              <h1 id="qa">Q&A with Allana Anderson</h1>
              <a href="/allana" class="stretched-link">.</a>
            </Card.Body>
          </Card>
          <Col lg="3"></Col>
        </Col>
      </Row>

    </Container>
  );
}

export default ArticleCard2;