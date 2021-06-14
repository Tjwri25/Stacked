import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./index.css"


function DanPage() {
    return (
    <Container>
        <Row>
            <Col></Col>
            <Col xs="12" lg="10">
            <Card className="danQACard">
                <Card.Body>
                <img
                  src="https://user-images.githubusercontent.com/74884495/121227749-ed12aa00-c859-11eb-934f-c17e4a3ddc64.jpg"
                  alt="Dan"
                  id="img-dan"
                  className="d-block mx-auto img-fluid"
                ></img>
              <h2>Q&A with Dan Kaltenbaugh</h2>
              <div id="danContent">
              <p id="question">Q: What is your current role? (Other than our beloved instructor)</p>
              <p>A: Software Developer for Fluent Stream Technologies</p>
              <p id="question">Q: Eventhough you are a seasoned developer, what are some things you do to continue learning?</p>
              <p>A: Sign up for coding challenges, attend hackathons, sign up for (podcast/newsletter) and look at AWS (latest) services.</p>
              <p id="question">Q: Is there any language or tool that you still struggle with?</p>
              <p>A: Not a fan of C Plus Plus… don’t know why but I just don’t like it.</p>
              <p id="question">Q: Are there any industry sites or blogs that you read regularly?</p>
              <p>A: AWS Latest site, UI.Dev and React Training emails.</p>
              <p id="question">Q: What are a few sites you admire and why? (from a webdev perspective)</p>
              <p>A: Old school was zengarden but that is no longer maintained. Monster Energy drink had some cool menu interactions that I like.</p>
              <p id="question">Q: What are a few personal web projects you've got going on?</p>
              <p>A: On the back burner for now. New job and teaching is taking up a lot of time.</p>
              <p id="question">Q: What advice would you give to someone who is just starting out?</p>
              <p>A: Set high, but achievable goals and stick to a plan to get there. “Get there” as a team or group so you have someone else to hold you accountable</p>

              </div>
                </Card.Body>
            </Card>
            </Col>
            <Col></Col>
        </Row>
    </Container>
    )
}

export default DanPage