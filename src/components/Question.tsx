import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import HorizontalLine from "./HorizontalLine";
import { Controller, Control } from "react-hook-form";

interface Answer {
  id?: number;
  text: string;
  points: number;
  createdAt?: string;
  updatedAt?: string;
}

interface QuestionData {
  id?: number;
  text: string;
  createdAt?: string;
  updatedAt?: string;
  answers: Answer[];
}

interface QuestionProps {
  question: QuestionData;
  control?: Control<any>;
  defaultValue?: string;
}

const Question: React.FC<QuestionProps> = ({ question, control, defaultValue }) => {

  return (
    <FormControl
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FormLabel
        sx={{
          fontFamily: "Cairo",
          fontSize: "24px",
          fontWeight: "700",
          letterSpacing: "-0.02em",
          color: "#1B1B1B",
        }}
        id={`${question.id}-label`}
      >
        {question.text}
      </FormLabel>
      <HorizontalLine margin=".5em 0" />

      {control ? (
        <Controller
          name={question.text}
          control={control}
          defaultValue={defaultValue || ""}
          render={({ field, fieldState }) => (
            <>
              <RadioGroup
                sx={{
                  display: "flex",
                  gap: "4em",
                  alignItems: "center",
                  flexDirection: "row",
                }}
                {...field}
                aria-labelledby={`${question.id}-label`}
              >
                {question.answers.map((answer) => (
                  <FormControlLabel
                    key={answer.text}
                    value={JSON.stringify({
                      answerId: answer.id,
                      questionId: question.id,
                    })}
                    control={<Radio />}
                    label={answer.text}
                  />
                ))}
              </RadioGroup>
              {fieldState.error && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.8rem",
                    marginTop: "0.5em",
                  }}
                >
                  {fieldState.error.message}
                </p>
              )}
            </>
          )}
        />
      ) : (
        <RadioGroup
          sx={{
            display: "flex",
            gap: "4em",
            alignItems: "center",
            flexDirection: "row",
          }}
          aria-labelledby={`${question.id}-label`}
        >
          {question.answers.map((answer) => (
            <FormControlLabel
              key={answer.text}
              value={JSON.stringify({
                answerId: answer.id,
                questionId: question.id,
              })}
              control={<Radio disabled />}
              label={answer.text}
              checked={
                JSON.stringify({
                  answerId: answer.id,
                  questionId: question.id,
                }) === defaultValue
              }
            />
          ))}
        </RadioGroup>
      )}
    </FormControl>
  );
};

export default Question;
