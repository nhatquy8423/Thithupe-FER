import axios from "axios";
import { useState } from "react";
import { Col, Row, Form, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    setValidated(true);
    if (isValid) {
      axios
        .post("http://localhost:5000/contacts", input)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  const handleReset = () => {
    setInput({ name: "", email: "", message: "" });
    setValidated(false);
  };
  return (
    <Container className="w-50">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="card p-5 mt-5"
      >
        <h3>Contact Us</h3>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="name"
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              name="name"
              onChange={(e) => setInput({ ...input, message: e.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group
            as={Col}
            md="12"
            controlId="validationCustom04"
            className="d-flex justify-content-end gap-3"
          >
            <Button type="submit" className="btn btn-primary w-20 mt-2">
              {" "}
              Submit
            </Button>
            <Button
              type="button"
              className="btn btn-secondary w-20 mt-2"
              onClick={handleReset}
            >
              {" "}
              Reset
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default Contact;
