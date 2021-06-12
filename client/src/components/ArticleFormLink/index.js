import React from "react";
import "../../index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function ArticleFormLink() {
  return (
    <h1>
      Found something useful? Add a resource
      <a href="/articleForm"> here</a>
    </h1>
  );
}

export default ArticleFormLink;
