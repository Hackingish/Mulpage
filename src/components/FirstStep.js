import React, { useContext, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";

export const FirstStep = () => {
  const { currentStep, setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  console.log(currentStep);

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
            setUserData({ ...userData, firstname: e.target.value });
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
            setUserData({ ...userData, lastname: e.target.value });
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
            setCurrentStep(2);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
