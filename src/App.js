import "./App.css";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import { Stepper, StepLabel, Step } from "@mui/material";
import { multiStepContext } from "./StepContext";
import { useContext } from "react";
function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      default:
        return;
    }
  };
  return (
    <div className="App">
      <h3>Multi step form</h3>
      <header className="App-header">
        <Stepper
          style={{ width: "18%" }}
          activeStep={currentStep - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        {showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
