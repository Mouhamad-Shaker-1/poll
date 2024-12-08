import { Box, Button, FormHelperText, Link, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginInput from "../LoginInput";
import { sendFormLogin } from "../../api";
import { loginSchema } from "../../validations/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema), 
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await sendFormLogin(data);
      // to the dashboard page
      navigate("/dashboard")
    } catch (error: any) {
      setError('root', {
        message: error.message
      })
    }
  };

  return (
    <Box
      dir="rtl"
      sx={{
        height: "100%",
        width: "70%",
        display: "flex",
        flexDirection: "column",
        textAlign: "right",
        padding: ".3em .9em",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Cairo",
          fontSize: "5rem",
          fontWeight: "300",
        }}
      >
        اهلن بك
      </Typography>
      {errors.root && (
        <FormHelperText
          sx={{
            textAlign: "right",
            fontSize: "12px",
            color: 'red'
          }}
        >
          {errors.root.message}
        </FormHelperText>
      )}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "2.2em",
          gap: "1.8em",
        }}
      >
        <LoginInput
          control={control}
          name="username"
          label="أسم المستخدم او الإيميل"
          placeholder="youremal@guru.com"
        />
        <LoginInput
          control={control}
          name="password"
          type="password"
          label="كلمة السر"
          formHelperText="هل نسيت كلمة السر؟"
          placeholder="ادخل كلمة السر"
        />
        <Button
          type="submit"
          sx={{
            height: "4.6rem",
            backgroundColor: "#007B8D",
            fontFamily: "Cairo",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
          variant="contained"
          disabled={isSubmitting}
        >
          تسجيل دخول
        </Button>
      </Box>

      <Typography
        sx={{
          padding: "0 2em",
          fontFamily: "Cairo",
          fontSize: "1.5rem",
          fontWeight: "400",
        }}
      >
        ليس لديك حساب؟
        <Link
          sx={{
            textDecoration: "none",
            margin: "0 4px",
            cursor: "pointer",
          }}
        >
          تواصل معنا
        </Link>
      </Typography>

      <Box
        sx={{
          padding: "0 2.2em",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "auto",
        }}
      >
        <Box
          sx={{
            fontFamily: "Cairo",
            fontSize: "1.3rem",
            fontWeight: "400",
            color: "#474747",
            display: "flex",
            gap: "1.5em",
            width: "30%",
            whiteSpace: "nowrap",
            justifyContent: "flex-end",
          }}
        >
          <Typography sx={{ cursor: "pointer" }}>شروط الخصوصية</Typography>
          <Typography sx={{ cursor: "pointer" }}>الدعم الفني</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
