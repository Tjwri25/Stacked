import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Send a POST request to the API endpoint
      fetch("/", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      function validateUser() {
        return true;
      }

      if (!validateUser) {
        alert("Wrong email or password!");
      } else if (validateUser) {
        alert("logged in!");
        let url = "/articles";
        history.push(url);
        // If successful, redirect the browser to the profile page
      }
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs="12" lg="6">
          <Card id="loginCard">
            <p id="loginTitle">
              Please log in to post to the &#123;Stacked&#125; Articles Page
            </p>
            <Row>
              <Col></Col>
              <Col lg="8">
                <Form className="center-block">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      <p id="inputTitle">Email address</p>
                    </Form.Label>

                    <Form.Control
                      id="emailInput"
                      type="email"
                      placeholder="example@somewhere.com"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      <p id="inputTitle">Password</p>
                    </Form.Label>
                    <Form.Control
                      id="passwordInput"
                      type="password"
                      placeholder="ex. Password123"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    id="loginSubmit"
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                  <p>
                    Don't have an account?<br></br>
                    <a className="signup" href="/signup">
                      Sign Up Here
                    </a>{" "}
                  </p>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
