import React, { useContext, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";

export const FirstStep = () => {
  const { currentStep, setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  console.log(currentStep);

  const isValidPhoneNumber = (number) => {
    const regex = /^\d{10}$/;
    return regex.test(number);
  };

  const isValidName = (name) => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(name);
  };

  return (
    <div>
      <div>
        <TextField
          label="First Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          type={"text"}
          onChange={(e) => {
            if (isValidName(e.target.value)) {
              setUserData({ ...userData, firstname: e.target.value });
            }
          }}
          value={userData["firstname"]}
        />
      </div>
      <div>
        <TextField
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          type={"text"}
          value={userData["lastname"]}
          onChange={(e) => {
            if (isValidName(e.target.value)) {
              setUserData({ ...userData, lastname: e.target.value });
            }
          }}
        />
      </div>
      <div>
        <TextField
          label="Contact Number"
          margin="normal"
          variant="outlined"
          color="secondary"
          type={"text"}
          value={userData["contact"]}
          onChange={(e) => {
            setUserData({ ...userData, contact: e.target.value });
          }}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="success"
          onClick={(e) => {
            if (isValidPhoneNumber(userData["contact"])) setCurrentStep(2);
            else alert("not valid phone");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
