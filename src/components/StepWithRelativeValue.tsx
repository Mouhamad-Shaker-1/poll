import { Box, Typography } from "@mui/material";
import React from "react";

interface StepWithRelativeValueProps {
  currentStep: number
}

const StepWithRelativeValue: React.FC<StepWithRelativeValueProps> = ({ currentStep }) => {
  let valueRange: number;
  let textStep: string;
  let percentage: string;

  if (currentStep == 2) {
    valueRange = 75;
    percentage = "50%";
    textStep = "المرحلة الثانية";
  } else if (currentStep == 3) {
    percentage = "100%";
    valueRange = 100;
    textStep = "المرحلة الثالثة";
  } else {
    percentage = "25%";
    valueRange = 50;
    textStep = "المرحلة الاولى";
  }

  return (
    <Box style={{ paddingBottom: ".5em" }}>
      <Box>
        <Typography
          sx={{
            fontFamily: "Cairo",
            fontSize: "0.6rem",
            fontWeight: "600",
            color: "#B5CCEC",
            marginBottom: ".3em",
          }}
        >
          {textStep}
        </Typography>
        <Typography
          dir="rtl"
          sx={{
            fontFamily: "Cairo",
            fontSize: "1.1rem",
            fontWeight: "700",
            marginTop: "0",
            marginBottom: ".5em",
          }}
        >
          <span>{percentage}</span> تم استكمال
        </Typography>
      </Box>
      <input
        type="range"
        className="slider"
        min="0"
        max="100"
        value={valueRange}
        style={{
          background: `linear-gradient(to right, #007B8D ${valueRange}%, white ${
            100 - valueRange
          }%)`,
        }}
      />
    </Box>
  );
};

export default StepWithRelativeValue;
