import { Box, Typography } from "@mui/material";
import imgs from "../img";
import SearchInput from "./SearchInput";

const DashboardHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em 2em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "3.5em",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Cairo",
              fontSize: "1.6rem",
              fontWeight: "600",
            }}
          >
            اسم المدير
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cairo",
              fontSize: "1.1rem",
              fontWeight: "400",
              color: "#71778E",
            }}
          >
            برحبا بك
          </Typography>
        </Box>
        <img src={imgs.Frame} />
      </Box>
      <SearchInput />
    </Box>
  );
};

export default DashboardHeader;
