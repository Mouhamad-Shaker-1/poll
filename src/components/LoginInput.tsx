import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
} from "@mui/material";
import { Controller } from "react-hook-form";

interface CustomInputProps {
  label: string;
  name: string;
  control?: any; // استخدام `control` من `useForm` أو `useFormContext`
  placeholder?: string;
  type?: string;
  rules?: any;
  formHelperText?: string
}

const LoginInput: React.FC<CustomInputProps> = ({
  label,
  name,
  control,
  placeholder = "",
  type = "text",
  rules,
  formHelperText
}) => {
  return (
    <FormControl
      sx={{
        width: "100%",
        display: "flex",
        gap: '1.3em',
        flexDirection: "colomn",
      }}
      error={false} // سيعتمد على الخطأ لاحقاً
    >
      <Box sx={{
        position: 'relative'
      }}>
        <FormLabel
          sx={{
            color: "#3F3F44",
            fontFamily: "Cairo",
            fontSize: "1.5rem",
            fontWeight: "400",
            marginTop: ".6em 0",
            whiteSpace: "nowrap",
          }}
          htmlFor={name}
        >
          {label}
        </FormLabel>
        <FormHelperText component='a' sx={{
            position: 'absolute',
            bottom: '-2px',
            margin: 0,
            left: 0,
            color: '#3F3F44',
            cursor: 'pointer'
        }}>{formHelperText}</FormHelperText>
      </Box>

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <Input
              {...field}
              disableUnderline
              id={name}
              type={type}
              placeholder={placeholder}
              sx={{
                width: "100%",
                backgroundColor: "#F5F7F8",
                height: "4.6rem",
                borderRadius: "3px",
                border: "none",
                padding: ".1em 1.5em",
                fontSize: "1.1rem",
                caretColor: "transparent",
              }}
            />
            {fieldState?.error && (
              <FormHelperText
                error
                sx={{
                  textAlign: 'right',
                  fontSize: "12px",
                }}
              >
                {fieldState?.error.message}
              </FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
};

export default LoginInput;
