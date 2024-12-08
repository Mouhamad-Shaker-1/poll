import React from "react";
import { Controller, Control } from "react-hook-form";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface RadioFormProps {
  label: string;
  options: Array<{ value: string; label: string }>; 
  name: string; 
  defaultValue?: string; 
  control: Control<any>; 
  rules?: Record<string, any>; 
}

const RadioForm: React.FC<RadioFormProps> = ({
  label,
  options,
  name,
  defaultValue,
  control,
  rules,
}) => {
  return (
    <FormControl
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        
      }}
    >
      <FormLabel
        sx={{
          fontFamily: "Cairo",
          fontSize: ".9rem",
          fontWeight: "700",
          flex: 1,
          textAlign: "left",
          padding: "1em",
        }}
        id={`${name}-label`}
      >
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <RadioGroup
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
              }}
              {...field}
              aria-labelledby={`${name}-label`}
              onChange={(e) => field.onChange(e.target.value)}
            >
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
            {fieldState.error && (
              <p
                style={{ color: "red", fontSize: "0.8rem", marginTop: "0.5em" }}
              >
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </FormControl>
  );
};

export default RadioForm;
