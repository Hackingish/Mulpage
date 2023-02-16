import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";

const DisplayData = () => {
  const { userData } = useContext(multiStepContext);
  return <div></div>;
};

export default DisplayData;
