// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import "../../index.css";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// function ArticleForm() {
//   let history = useHistory();
//   const [title, setTitle] = useState();
//   const [url, setURL] = useState();
//   const [type, setType] = useState();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("/api/articles/addarticles", {
//       method: "POST",
//       body: JSON.stringify({
//         title: title,
//         url: url,
//         type: type
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         let url = "/articles";
//         history.push(url);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//  const handleChange = (e) => {
//       setType(e.target.value);
//    console.log("HERE", e.target.value)
//   }
  
//   return (
//     <Container fluid>
//       <Row>
//         <Col></Col>
//         <Col xs="12" lg="6">
//           <Card id="addArticleCard">
//             <Card.Body>
//               <p id="loginTitle">
//                 Post a new article to the &#123;Stacked&#125; Articles Page
//               </p>
//               <Form className="center-block">
//                 <Form.Group>
//                   <Form.Label>What's the title?</Form.Label>
//                   <Form.Control
//                     id="articleTitle"
//                     type="text"
//                     placeholder="ex. How to get along with others"
//                     onChange={(e) => setTitle(e.target.value)}
//                   />
//                 </Form.Group>

//                 <Form.Group>
//                   <Form.Label>URL</Form.Label>
//                   <Form.Control
//                     id="articleURL"
//                     type="text"
//                     placeholder="ex. https://ilovetocode.com/"
//                     onChange={(e) => setURL(e.target.value)}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlSelect2">
//                   <Form.Label>What category does it belong in?</Form.Label>
//                   <Form.Control id="articleCat" as="select" multiple>
//                     <option value="job-search" onClick={handleChange}>Job Searching</option>
//                     <option value="interview-prep" onClick={handleChange}>Interview Prep</option>
//                     <option value="resources" onClick={handleChange}>Resources</option>
//                   </Form.Control>
//                 </Form.Group>
//                 <Button
//                   id="addArtSubmit"
//                   variant="primary"
//                   type="submit"
//                   onClick={handleSubmit}
//                 >
//                   Submit
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col></Col>
//       </Row>
//     </Container>
//   );
// }

// export default ArticleForm;
