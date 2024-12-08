import { Box, Button, Typography } from "@mui/material";
import imgs from "../../img";
import React from "react";


interface FinishForm {
  description: string;
}

const FinishForm: React.FC<FinishForm> = ({ description }) => {

  return (
    <Box
      dir="rtl"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            width: "350px",
          }}
          src={imgs.FinishPoll}
        />
        <Box sx={{ textAlign: "center", marginRight: '4em' }}>
          <Typography
            sx={{
              fontFamily: "Cairo",
              fontSize: "3.2rem",
              fontWeight: "600",
              color: "#007B8D",
            }}
          >
            تم الانهاء
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cairo",
              fontSize: "1rem",
              fontWeight: "400",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      <Button
        type="submit"
        sx={{
          backgroundColor: "#008F9C",
          height: "8%",
          color: "#fff",
          fontFamily: "Cairo",
          fontSize: "1.5rem",
          fontWeight: 600,
          paddingBottom: ".5em",
          border: "none",
          borderRadius: "0",
        }}
      >
        تم
      </Button>
    </Box>
  );
};

export default FinishForm;
