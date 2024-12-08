import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Answer {
    text: string;
    id?: number;
    points: number;
    createdAt?: string;
    updatedAt?: string;
  }
  
  interface Question {
    id?: number;
    text: string;
    createdAt?: string;
    updatedAt?: string;
    answers: Answer[];
  }
  
  interface Poll {
    id?: number;
    title: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
    questions: Question[];
  }
  
  interface PollsState {
    polls: Poll[];
    newPoll: Poll
  }
  

const initialState: PollsState = {
  polls: [],
  newPoll: {
    title: '',
    description: '',
    questions: []
  }
};

const pollsSlice = createSlice({
  name: 'polls',
  initialState,
  reducers: {
    setPolls: (state, action: PayloadAction<Poll[]>) => {
        state.polls = action.payload;
      },  
      deletePoll: (state, action: PayloadAction<number>) => {
        state.polls = state.polls.filter((poll) => poll.id !== action.payload)
      },    
      addNewPollToPolls: (state, action: PayloadAction<Poll>) => {
        state.polls.push(action.payload)
      },  
      resetNewPoll: (state) => {
        state.newPoll = {
          title: '',
          description: '',
          questions: []
        }
      },     
      addQuestion: (state, action: PayloadAction<Question>) => {
        state.newPoll.questions.push(action.payload);
      },      
      addTitleAndDescriptionToNewPoll: (state, action: PayloadAction<{title: string, description: string}>) => {
        console.log('action', action.payload)
        state.newPoll = { ...state.newPoll, title: action.payload.title, description: action.payload.description}
      },
  },
});


export const { setPolls, resetNewPoll, addQuestion, addTitleAndDescriptionToNewPoll, addNewPollToPolls, deletePoll } = pollsSlice.actions;

export default pollsSlice.reducer;
