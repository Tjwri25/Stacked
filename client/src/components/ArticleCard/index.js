import React from "react";
import "../../index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ArticleCard() {
  return (
    <Container fluid>
      <Row>
        <Col xs="12" lg="4">
          <Card id="jobSearchCard">
            <Card.Body>
              <h2>Job Searching</h2>
              <ol>
                <li>
                  {" "}
                  <Link to="https://skillcrush.com/blog/job-sites-to-find-your-first-developer-job/">
                    25 Best Job Sites For Finding Your FIRST Developer Job
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="http://blog.thefirehoseproject.com/posts/web-developer-job-search-guide/">
                    Tackle the Web Developer Job Search
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="https://careerfoundry.com/en/blog/web-development/how-to-get-your-first-web-developer-job-the-ultimate-guide-for-junior-developers/">
                    How To Get Your First Web Developer Job: The Ultimate Guide
                    for Junior Developers
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="https://www.themuse.com/advice/the-ultimate-job-search-guide-literally-everything-you-need-to-know-to-land-a-job-youll-love">
                    The Ultimate Job Search Guide: Literally Everything You Need
                    to Know to Land a Job You'll Love
                  </Link>
                </li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" lg="4">
          <Card id="intPrepCard">
            <Card.Body>
              <h2>Interview Prep</h2>

              <ol>
                <li>
                  {" "}
                  <Link to="https://www.codingdojo.com/blog/programming-interview-questions">
                  How to Ace the Web Developer Job Interview – The Ultimate Guide
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="https://skillcrush.com/blog/web-developer-job-interview/">
                  Web Developer Job Interviews Decoded: Exactly What Skills To Highlight, What To Expect, And How To Leave A Positive Impression
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="https://www.indeed.com/career-advice/interviewing/web-developer-interview-questions">
                  Common Web Developer Interview Questions (With Example Answers)
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="https://www.freecodecamp.org/news/key-takeaways-from-my-first-front-end-web-developer-interview-90baa9eff1af/">
                  Key Takeaways from my first Front-end Web Developer Interview
                  </Link>
                </li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" lg="4">
          <Card id="resourcesCard">
            <Card.Body>
              <h2>Resources</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticleCard;
