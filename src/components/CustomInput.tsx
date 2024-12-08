import React from 'react';
import { FormControl, FormLabel, Input, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';

interface CustomInputProps {
  label: string;
  name: string;
  control?: any;
  placeholder?: string;
  type?: string;
  rules?: any;
  position?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  control,
  position,
  placeholder = '',
  type = 'text',
  rules
}) => {
  return (
    <FormControl
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row', 
      }}
    >
      <FormLabel
        sx={{
          fontFamily: 'Cairo',
          fontSize: '.9rem', 
          fontWeight: '700',
          flex: position === 'right' ? '' : 1,
          textAlign: 'left', 
          marginTop: '.6em',
          padding: '1em',
          whiteSpace: 'nowrap'
        }}
        htmlFor={name}
      >
        {label}
      </FormLabel>

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
                width: position === 'right' ? '95%' : '78%', 
                backgroundColor: '#F5F7F8',
                height: '100%',

                borderRadius: '3px',
                border: 'none',
                padding: '.1em 1.5em',
                fontSize: '.9rem',
                caretColor: "transparent",
              }}
            />
            {fieldState?.error && (
              <FormHelperText
                error
                sx={{
                  fontSize: '12px',
                  paddingLeft: '1em',
                  marginTop: '0.5em',
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

export default CustomInput;
