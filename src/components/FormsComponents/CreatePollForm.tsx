import {
  Box,
  Button,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setDialogFormState, setMood } from "../../redux/moodSlice";
import DialogForm from "./DialogForm";
import {
  addNewPollToPolls,
  addTitleAndDescriptionToNewPoll,
  resetNewPoll,
} from "../../redux/pollsSlice";
import { createNewPoll } from "../../api";
import Question from "../Question";

interface FormData {
  title: string;
  description: string;
}

const CreatePollForm = () => {
  const newPoll = useSelector((state: RootState) => state.polls.newPoll);

  const dispatch = useDispatch<AppDispatch>();

  console.log(newPoll);

  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    dispatch(addTitleAndDescriptionToNewPoll(data));

    const updatedNewPoll = { ...newPoll, ...data };

    try {
      const res = await createNewPoll(updatedNewPoll);
      dispatch(setMood("table"));

      dispatch(addNewPollToPolls(res.data));

      dispatch(resetNewPoll());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        dir="rtl"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          padding: "0 4em",
        }}
      >
        <CustomInput
          control={control}
          label="العنوان"
          position="right"
          name="title"
        />
        <CustomInput
          control={control}
          label="الوصف"
          position="right"
          name="description"
        />

        <Box sx={{ padding: newPoll.questions.length !== 0 ? "1.5em 0" : '0' }}>
          {newPoll.questions
            && newPoll.questions.map((question) => {
              console.log('render')
                return <Question question={question} />;
              })
            }
        </Box>

        <Button onClick={() => dispatch(setDialogFormState())}>اضف سؤال</Button>

        <Button onClick={() => dispatch(setMood("table"))}>عودة</Button>

        <Button type="submit">انتهاء</Button>
      </Box>
      <DialogForm />
    </>
  );
};

export default CreatePollForm;
