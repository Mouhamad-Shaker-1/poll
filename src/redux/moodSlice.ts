import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoodState {
  currentMood: string;
  dialogFormState: boolean;
  currentStepUserPoll: number
}

const initialState: MoodState = {
  currentMood: "table",
  dialogFormState: false,
  currentStepUserPoll: 1
};

const moodSlice = createSlice({
  name: "mood",
  initialState,
  reducers: {
    setMood: (state, action: PayloadAction<string>) => {
      state.currentMood = action.payload;
    },    
    setDialogFormState: (state) => {
      state.dialogFormState = !state.dialogFormState; 
    },
    nextStep: (state) => {
      if (state.currentStepUserPoll < 3) {
        state.currentStepUserPoll += 1;
      }
    },
    resetStep: (state) => {
      state.currentStepUserPoll = 1;
    },
  },
});

export const { setMood, setDialogFormState, nextStep, resetStep } = moodSlice.actions;
export default moodSlice.reducer;
