import React from "react";
import { Form, Button } from "react-bootstrap";

const Step1 = ({ formData, handleChange, errors, nextStep }) => {
  const { name, email, phone } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" onClick={handleNext} className="mt-4">
        Next
      </Button>
    </div>
  );
};

export default Step1;
