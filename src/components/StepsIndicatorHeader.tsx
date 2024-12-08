import { Box, Typography } from "@mui/material";
import Icon from "./Icon.tsx";
import StepLine from "./StepLine.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";

import imgs from "../img/index.ts";

const StepIndicatorHeader = () => {

  const currentStep = useSelector((state: RootState) => state.mood.currentStepUserPoll);

  const steps = [
    {
      id: 3,
      imgName: "Approval",
      text: "الموافقة",
    },
    {
      id: 2,
      imgName: "Quetion",
      text: "الأسئلة",
    },
    {
      id: 1,
      imgName: "Form",
      text: "المعلومات الخاصة بك",
    },
  ];

// just for know to make a way to change the step by click on the icon (debugging)
  // const dispatch: AppDispatch = useDispatch();
  // const handleStepChange = (newStep: number) => {
  //   dispatch(setStep(newStep));
  // };

  return (
    <Box sx={{ height: "13%", width: "100%" }} dir="rtl">
      <Box
        className="steps-indicator-container"
        sx={{
          margin: "auto",
          display: "flex",
          height: "100%",
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {steps.map((step) => {
          return (
            <>
              <Box
                sx={{
                  // cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1em",
                  color: currentStep === step.id ? "#008897" : "#000", 
                }}
                // onClick={() => handleStepChange(step.id)}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Cairo, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    lineHeight: "2rem",
                  }}
                >
                  {step.text}
                </Typography>
                
                <Icon
                  nameImg={step.imgName as keyof typeof imgs}
                  color={currentStep === step.id ? "blue" : ""}
                />
              </Box>
              {step.id !== 1 ? (
                <StepLine
                  color={currentStep === step.id - 1 ? "#008897" : "#000"}
                />
              ) : (
                ""
              )}
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default StepIndicatorHeader;
