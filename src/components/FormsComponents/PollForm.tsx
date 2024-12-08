import { Box, Button, FormHelperText } from "@mui/material";
import { useForm } from "react-hook-form";
import Question from "../Question";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addSolve } from "../../redux/formUserInfoSlice";
import React from "react";
import { sendFormDateClient } from "../../api";
import { nextStep } from "../../redux/moodSlice";

interface PollFormPops {
  questions?: Question[];
}

interface Answer {
  id: number;
  text: string;
  points: number;
  createdAt: string;
  updatedAt: string;
}

interface Question {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  answers: Answer[];
}

interface FormData {
  [questionId: string]: string;
}

const PollForm: React.FC<PollFormPops> = ({ questions }) => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<FormData>();

  const form = useSelector((state: RootState) => state.formUserInfo);

  const dispatch: AppDispatch = useDispatch();

  const onSubmit = async (data: FormData) => {
    // format the data to be conformtble with data must send to API
    const answersArray = Object.entries(data).map(([answerKey, answerJson]) => {
      const parsedAnswer = JSON.parse(answerJson as string);
      return {
        questionId: Number(parsedAnswer.questionId),
        answerId: Number(parsedAnswer.answerId),
      };
    });

    const formClientToAPI = { ...form.userInfo, solve: answersArray };
    // send data to API and added to redux store and go to the next setp
    try {
      await sendFormDateClient(formClientToAPI);
      dispatch(addSolve(answersArray));
      dispatch(nextStep());
    } catch (error: any) {
      setError('root', {
        message: error.message
      })
      console.log(error);
    }
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
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2em",
          paddingRight: "2em",
        }}
      >
        {questions &&
          questions.map((question: Question) => {
            return <Question question={question} control={control} />;
          })}
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
        disabled={isSubmitting}
      >
        التالي
      </Button>
    </Box>
  );
};

export default PollForm;
