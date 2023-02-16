import React, { useContext, useEffect, useState } from "react";
import { multiStepContext } from "../StepContext";
import { Button, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { Stack } from "@mui/system";
export const Preview = () => {
  const { currentStep, setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  const history = useHistory();
  return (
    <Stack sx={{ margin: "200px" }}>
      <Stack spacing={3}>
        <img src={userData["file"]} alt="Selected file" />
        <Typography variant="body">
          firstname: {userData["firstname"]}
        </Typography>
        <Typography variant="body">lastname: {userData["lastname"]}</Typography>
        <Typography variant="body">email: {userData["email"]}</Typography>
        <Typography variant="body">gender:{userData["gender"]}</Typography>
      </Stack>
      <Stack direction={"row"} sx={{ margin: "20px auto" }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setUserData("");
            history.push("/");
          }}
        >
          create fresh
        </Button>
      </Stack>
    </Stack>
  );
};
