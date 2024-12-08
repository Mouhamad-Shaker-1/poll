import React from "react";
import { Divider } from "@mui/material";

interface HorizontalLineProps {
  margin?: string;
  width?: string;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ margin, width }) => {
  return (
    <Divider
      sx={{
        width: width ? width : '100%', 
        backgroundColor: "#F1F1F2", 
        height : '3px',
        margin: margin ? margin : 'auto',
        border: 'none'
      }}
    />
  );
};

export default HorizontalLine;
