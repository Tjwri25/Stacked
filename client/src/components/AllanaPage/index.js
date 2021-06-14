import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./index.css";

function AllanaPage() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs="12" lg="10">
          <Card className="danQACard">
            <Card.Body>
              <img
                src="https://user-images.githubusercontent.com/74884495/121931471-aa494a00-cd11-11eb-8541-82d17b0ec4c4.jpg"
                alt="Allana"
                id="img-allana"
                className="d-block mx-auto img-fluid"
              ></img>
              <h2>Q&A Allana Anderson</h2>
              <div id="danContent">
                <p id="question">Q: What is your current role? </p>
                <p>A: React Developer with GDIT</p>
                <p id="question">
                  Q: How long did it take you to find a job after bootcamp?
                </p>
                <p>A: 3 months</p>
                <p id="question">
                  Q: Did you just apply for every job that you could, or did you
                  have an idea of what you wanted to do?
                </p>
                <p>
                  A: I applied to any job that I felt like I could do. For
                  example, I didn't apply for any PHP jobs, but if I saw
                  literally anything with JavaScript in the title, I applied. I
                  would go on linkedIn everyday, search for "software developer"
                  in jobs, and limit the search to "posted in the last 24 hours"
                  and apply to every job I saw that I thought I could do.
                </p>
                <p id="question">Q: How many interviews did you go through?</p>
                <p>
                  A: Out of all the applications I submitted, I only got 3
                  interviews, 2 were with the company I work for now.
                </p>
                <p id="question">
                  Q: What are some things you do to continue learning?
                </p>
                <p>
                  A:Just at my job I am doing new things everyday. Since the
                  bootcamp, I've learned a lot about TypeScript, Virtual
                  Machines, Amazon Web Services, SourceTree, Atlassian, JSP,
                  agile development, and so much more. Before my job, I would
                  try and complete at least one algorithm challenge on either
                  code wars, daily coding problem, interview cake, or some other
                  site. I made react sites for some of my friends and family to
                  keep up on my react skills, and I did a udemy course on ui/ux
                  design because I felt like it was something I was not good at.
                </p>
                <p id="question">
                  Q: Is there any language or tool that you still struggle with
                  or just flat out don't like?
                </p>
                <p>
                  A: I HATE Heroku, do not like Handlebars, and still struggle
                  with the backend.
                </p>
                <p id="question">
                  Q: Are there any industry sites or blogs that you read
                  regularly?
                </p>
                <p>A: Only LinkedIn.</p>
                <p id="question">
                  Q: Are there any personal web projects you've got going on?
                </p>
                <p>
                  A: I am making a website for my dad, struggling with
                  deployment currently.
                </p>
                <p id="question">
                  Q: What advice would you give to someone who is just starting
                  out after bootcamp?
                </p>
                <p>
                  A: Keep up on your coding skills, even if you only get in an
                  hour a day, and don't be discouraged if it takes time to find
                  a job. The tough part about finding your first job as a junior
                  developer with no experience is you kind of have to wait for
                  someone to take a chance on you. Apprenticeships and
                  internships could help with this, but if it takes you a while
                  to find a job, it does not mean there's something wrong with
                  you or that you're not good enough.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default AllanaPage;
