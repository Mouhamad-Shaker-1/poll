import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfo {
  name: string;
  email: string;
  employment_status: string;
  teaching: string;
  date_of_birth: string;
  address: string;
  gender: string;
  solve: Solve[]; 
}

interface Solve {
  questionId: number;
  answerId: number;
}

interface FormState {
  userInfo: UserInfo;
}

const initialState: FormState = {
  userInfo: {
    name: '',
    email: '',
    employment_status: '',
    teaching: '',
    date_of_birth: '',
    address: '',
    gender: '',
    solve: [],
  },
};

const formSlice = createSlice({
  name: 'formUserInfo',
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<Partial<UserInfo>>) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    addSolve: (state, action: PayloadAction<Solve[]>) => {
      state.userInfo.solve = action.payload; 
    },
    resetForm: () => initialState,
  },
});

export const { updateUserInfo, addSolve, resetForm } = formSlice.actions;

export default formSlice.reducer;
