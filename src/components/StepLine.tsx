import { Box } from "@mui/material";
import React from "react";


interface StepLineProps {
    color?: string;
  }
  


const StepLine: React.FC<StepLineProps> = ({ color = '#000' }) => {
    return (
    <Box
        sx={{
          width: "2.5rem", 
          height: "2px", 
          backgroundColor: color, 
        }}
      ></Box>
    )
}

export default StepLine