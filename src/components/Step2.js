import React from "react";
import { Form, Button } from "react-bootstrap";

const Step2 = ({ formData, handleChange, errors, prevStep, nextStep }) => {
  const { address1, address2, city, state, zip } = formData;

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handleBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <Form.Group>
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control
          type="text"
          name="address1"
          value={address1}
          onChange={handleChange}
          isInvalid={!!errors.address1}
        />
        <Form.Control.Feedback type="invalid">
          {errors.address1}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control
          type="text"
          name="address2"
          value={address2}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
          isInvalid={!!errors.city}
        />
        <Form.Control.Feedback type="invalid">
          {errors.city}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          name="state"
          value={state}
          onChange={handleChange}
          isInvalid={!!errors.state}
        />
        <Form.Control.Feedback type="invalid">
          {errors.state}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          type="text"
          name="zip"
          value={zip}
          onChange={handleChange}
          isInvalid={!!errors.zip}
        />
        <Form.Control.Feedback type="invalid">
          {errors.zip}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="secondary" onClick={handleBack} className="mt-4 m-4">
        Back
      </Button>
      <Button variant="primary" onClick={handleNext} className="mt-4 m-4">
        Next
      </Button>
    </div>
  );
};

export default Step2;
