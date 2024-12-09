import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setDialogFormState } from "../../redux/moodSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../CustomInput";
import { addQuestion } from "../../redux/pollsSlice";

// interface Answer {
//   text: string;
//   points: number;
// }

// interface FormData {
//   text: string;
//   answers: Answer[];
// }

const DialogForm = () => {
  const dialogFormState = useSelector(
    (state: RootState) => state.mood.dialogFormState
  );

  const {
    handleSubmit,
    control,
  } = useForm<FormData>();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<any> = async (data) => {
    const question = {
      text: data.text,
      answers: [
        {
          text: data.answer1,
          points: Number(data.points1),
        },
        {
          text: data.answer2,
          points: Number(data.points2),
        },
        {
          text: data.answer3,
          points: Number(data.points3),
        }
      ] 
    };
    console.log(question)
    dispatch(addQuestion(question));
    dispatch(setDialogFormState());
  };

  return (
    <Dialog
      open={dialogFormState}
      component="form"
      dir="rtl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <DialogTitle>إضافة سؤال جديد</DialogTitle>
      <DialogContent>
        <CustomInput control={control} name="text" label="السؤال" />

        <Box
          sx={{
            display: "flex",
            gap: "1em",
            height: "40px",
            marginTop: "1em",
          }}
        >
          <CustomInput
            control={control}
            name="answer1"
            type="text"
            label="1 الاجابة"
          />
          <CustomInput
            control={control}
            name="points1"
            type="number"
            label="النقات"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1em",
            height: "40px",
            marginTop: "1em",
          }}
        >
          <CustomInput control={control} name="answer2" label="2 الاجابة" />
          <CustomInput
            control={control}
            name="points2"
            type="number"
            label="النقات"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1em",
            height: "40px",
            marginTop: "1em",
          }}
        >
          <CustomInput control={control} name="answer3" label="3 الاجابة" />
          <CustomInput
            control={control}
            name="points3"
            type="number"
            label="النقات"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(setDialogFormState())} color="primary">
          إلغاء
        </Button>
        <Button
          type="submit"
          // onClick={() => dispatch(setDialogFormState())}
          color="primary"
        >
          إضافة
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogForm;
