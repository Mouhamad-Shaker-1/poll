import React from "react";
import StepWithRelativeValue from "./StepWithRelativeValue";
import { Box, Typography } from "@mui/material";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import imgs from "../img";

interface SidebarStepsProps {
  titlePoll: string;
  descriptionPoll: string;
}

const SidebarSteps: React.FC<SidebarStepsProps> = ({
  titlePoll,
  descriptionPoll,
}) => {

  const currentStep = useSelector((state: RootState) => state.mood.currentStepUserPoll);

  return (
    <Box
      sx={{
        position: "relative",
        width: "30%",
        height: "100%",
      }}
    >
      <img
        src={imgs.Rectangle1}
        alt="Sample"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          color: "white",
          width: "100%",
          textAlign: "right",
          padding: "1.8rem",
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Cairo",
            fontWeight: 600,
            fontSize: '3.5rem',
          }}
        >
          {titlePoll}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#c9c9c9",
            fontFamily: "Cairo",
            fontWeight: 400,
            fontSize: '.9rem',
            marginBottom: '2em',
            marginTop: '.9em'
          }}
        >
          {descriptionPoll}
        </Typography>

        <StepWithRelativeValue currentStep={currentStep} />
      </Box>
    </Box>
  );
};

export default SidebarSteps;
