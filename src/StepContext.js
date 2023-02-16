import React, { useState } from "react";
import App from "./App";
export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  async function submitdata() {
    setFinalData((finalData) => [...finalData, userData]);
    setCurrentStep(1);
    try {
      const res = await fetch("http://localhost:5000/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstname: userData["firstname"],
          lastname: userData["lastname"],
          contact: userData["contact"],
          email: userData["email"],
        }),
      });
      setUserData("");
      if (res) alert("success");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <multiStepContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitdata,
      }}
    >
      <App />
    </multiStepContext.Provider>
  );
};
export default StepContext;
