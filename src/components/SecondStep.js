import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { multiStepContext } from "../StepContext";

export const SecondStep = () => {
  const { currentStep, setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);

  const [selectedOption, setSelectedOption] = useState("option1");
  useEffect(() => {}, [setCurrentStep]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
          type={"email"}
          value={userData["email"]}
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
        />
      </div>
      <div>
        Select Your Gender
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label="Male"
            labelPlacement="end"
          />
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label="Female"
            labelPlacement="end"
          />
          <FormControlLabel
            value="option3"
            control={<Radio />}
            label="Others"
            labelPlacement="end"
          />
        </RadioGroup>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCurrentStep(1)}
          sx={{ "margin-right": "60px" }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => setCurrentStep(3)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
