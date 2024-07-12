import React from "react";
import { Button } from "react-bootstrap";

const Step3 = ({ formData, prevStep, handleSubmit, submitted }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Phone:</strong> {formData.phone}
      </p>
      <p>
        <strong>Address Line 1:</strong> {formData.address1}
      </p>
      <p>
        <strong>Address Line 2:</strong> {formData.address2}
      </p>
      <p>
        <strong>City:</strong> {formData.city}
      </p>
      <p>
        <strong>State:</strong> {formData.state}
      </p>
      <p>
        <strong>Zip Code:</strong> {formData.zip}
      </p>

      {submitted && (
        <div className="submission-confirmation">
          <span className="tick-mark">✔️</span>
          <p>Form data submitted</p>
        </div>
      )}

      <Button variant="secondary" onClick={prevStep} className="mt-4 m-4">
        Back
      </Button>
      <Button variant="primary" onClick={handleFormSubmit} disabled={submitted} className="mt-4 m-4">
        Submit
      </Button>
    </div>
  );
};

export default Step3;
