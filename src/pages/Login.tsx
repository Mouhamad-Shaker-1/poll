import { Box, Typography } from "@mui/material";
import imgs from "../img";
import LoginForm from "../components/FormsComponents/LoginForm";

const Login = () => {
  return (
    <Box sx={{ height: '100vh', display: "flex" }}>
      <Box
        sx={{
          position: "relative",
          width: "30%",
          height: "100%",
        }}
      >
        <img
        src={imgs.Rectangle}
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
          textAlign: "center",
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            fontSize: '2.6rem',
          }}
        >
          تسجيل دخول
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#c9c9c9",
            fontWeight: 400,
            fontSize: '.9rem',
            marginTop: '1.3em'
          }}
        >
          شرح بسيط
        </Typography>

      </Box>
      </Box>

        <LoginForm />

    </Box>
  );
};

export default Login;
