import React, { useState, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Container, Form } from "react-bootstrap";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    city: "",
    state: "",
    zip: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const updateLocalStorage = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
  };

  const validateStep = () => {
    const { name, email, phone, address1, city, state, zip } = formData;
    let errors = {
      name: "",
      email: "",
      phone: "",
      address1: "",
      city: "",
      state: "",
      zip: "",
    };

    let isValid = true;

    if (currentStep === 1) {
      if (!name.trim()) {
        errors.name = "Name is required";
        isValid = false;
      }

      if (!email.trim()) {
        errors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid";
        isValid = false;
      }

      if (!phone.trim()) {
        errors.phone = "Phone is required";
        isValid = false;
      }
    } else if (currentStep === 2) {
      if (!address1.trim()) {
        errors.address1 = "Address Line 1 is required";
        isValid = false;
      }

      if (!city.trim()) {
        errors.city = "City is required";
        isValid = false;
      }

      if (!state.trim()) {
        errors.state = "State is required";
        isValid = false;
      }

      if (!zip.trim()) {
        errors.zip = "Zip Code is required";
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Form data:", formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setCurrentStep(1);
      }, 3000);
    } else {
      console.error("Form validation failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
      updateLocalStorage(formData); 
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    updateLocalStorage(formData); 
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <Step1
            formData={formData}
            handleChange={handleChange}
            errors={formErrors}
            nextStep={nextStep}
          />
        )}
        {currentStep === 2 && (
          <Step2
            formData={formData}
            handleChange={handleChange}
            errors={formErrors}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 3 && (
          <Step3
            formData={formData}
            handleSubmit={handleSubmit}
            submitted={submitted}
            prevStep={prevStep}
          />
        )}
      </Form>
    </Container>
  );
};

export default MultiStepForm;
