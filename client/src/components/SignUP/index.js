import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

function SignupForm() {
  let history = useHistory();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    let user = {name, email, password};
    fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        let url = "/login";
        history.push(url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs="12" lg="6">
          <Card id="signupCard">
            <p id="loginTitle">
              Please sign up to post to the &#123;Stacked&#125; Articles Page
            </p>
            <Row>
              <Col></Col>
              <Col lg="8">
                <Form className="center-block">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      <p id="inputTitle">Full Name</p>
                    </Form.Label>

                    <Form.Control
                      id="nameSignup"
                      type="text"
                      placeholder="ex. John Smith"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      <p id="inputTitle">Email address</p>
                    </Form.Label>

                    <Form.Control
                      id="emailSignup"
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
                      id="passwordSignup"
                      type="password"
                      placeholder="ex. Password123"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    id="signupSubmit"
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                  <p>
                    Already have an Account?<br></br>
                    <a className="login" href="/login">
                      Log in Here
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

export default SignupForm;
