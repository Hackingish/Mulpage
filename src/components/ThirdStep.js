import React, { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";
import { useHistory } from "react-router-dom";
export const ThirdStep = () => {
  const { setCurrentStep, userData, setUserData, submitdata } =
    useContext(multiStepContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const history = useHistory();

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
    setUserData({ ...userData, file: event.target.files[0] });
  }

  return (
    <div>
      <div>
        <TextField
          label="Address"
          margin="normal"
          variant="outlined"
          color="secondary"
          type={"text"}
          value={userData["city"]}
          onChange={(e) => {
            setUserData({ ...userData, city: e.target.value });
          }}
        />
      </div>
      <div style={{ margin: "10px 0" }}>
        <input type="file" onChange={handleFileChange} />
        {selectedFile && (
          <img src={URL.createObjectURL(selectedFile)} alt="Selected file" />
        )}
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCurrentStep(2)}
          sx={{ "margin-right": "60px" }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            history.push("/preview");
            submitdata();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
