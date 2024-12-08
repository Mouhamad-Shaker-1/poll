import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../redux/formUserInfoSlice.ts";
import {
  Box,
  Button,
} from "@mui/material";
import CustomInput from "../CustomInput.tsx";
import { AppDispatch } from "../../redux/store.ts";
import HorizontalLine from "../HorizontalLine.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioForm from "../RadioForm.tsx";
import { useInfoSchema } from "../../validations/useInfoSchema.ts";
import { nextStep } from "../../redux/moodSlice.ts";

interface FormValues {
  name: string;
  email: string;
  employment_status: "student" | "employee" | "employer";
  teaching: string;
  age?: any;
  address: string;
  gender: "male" | "female";
}

const UserForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(useInfoSchema)
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {

    // delete the age because not needed in API
    const dataWithoutAge = Object.assign({}, data);
    delete dataWithoutAge.age;

    dispatch(updateUserInfo(dataWithoutAge));

    dispatch(nextStep());
  };

  return (
    <Box
      dir="rtl"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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
          flexDirection: "column",
          gap: "1em",
          padding: "2em",
        }}
      >
        <CustomInput
          name="name"
          label="الاسم"
          control={control}
        />
        <CustomInput
          name="email"
          label="البريد الإلكتروني"
          type="email"
          control={control}
        />
        <Box>
          <HorizontalLine width="80%" />
          <RadioForm
            label="الحالة الوظيفية"
            name="employment_status"
            control={control}
            options={[
              { value: "student", label: "طالب" },
              { value: "employee", label: "موظف" },
              { value: "employer", label: "صاحب عمل" },
            ]}
          />
          <HorizontalLine width="80%" />
        </Box>
        <CustomInput name="teaching" label="التعليم" control={control} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "95%",
            marginRight: "auto",
            maxHeight: "50px",
          }}
        >
          <CustomInput
            type="date"
            name="date_of_birth"
            label="تاريخ الولادة"
            control={control}
          />
          <CustomInput
            type="number"
            name="age"
            label="العمر"
            control={control}
          />
        </Box>
        <CustomInput name="address" label="عنوان السكن" control={control} />
        <Box>
          <HorizontalLine />
          <RadioForm
            label="الجنس"
            name="gender"
            control={control}
            options={[
              { value: "male", label: "ذكر" },
              { value: "female", label: "انثى" },
            ]}
          />
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
        التالي
      </Button>
    </Box>
  );
};

export default UserForm;
