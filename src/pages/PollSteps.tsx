import React from "react";
import SidebarSteps from "../components/SidebarSteps.tsx";

import { useSelector } from "react-redux";
import {  RootState } from "../redux/store.ts";
import { getOnePoll } from "../api.ts";
import { useLoaderData } from "react-router-dom";
import { Box } from "@mui/material";
import StepsIndicatorHeader from "../components/StepsIndicatorHeader.tsx";
import UserForm from "../components/FormsComponents/UserForm.tsx";
import PollForm from "../components/FormsComponents/PollForm.tsx";
import FinishForm from "../components/FormsComponents/FinishForm.tsx";

export const loader = async () => {
  // bring the poll information
  // must add search params to define the poll to to get
  const res = await getOnePoll(110);
  return res.data;
};

const PollSteps: React.FC = () => {

  // using the currentStep to knowing what the component form we will render
  const currentStep = useSelector((state: RootState) => state.mood.currentStepUserPoll);


  // passing the poll info to SidebarSteps and PollForm
  // if this project will be more larger must take this poll to store in redux
  const poll = useLoaderData();


  return (
    <Box sx={{ height: "100vh", display: "flex" }}>

      <SidebarSteps titlePoll={poll.title} descriptionPoll={poll.description} />

      {/* Main content */}
      <Box
        sx={{
          height: "100%",
          width: "70%",
          display: "flex",
          flexDirection: "column",
        }}
      >

        <StepsIndicatorHeader />

        <Box sx={{ flex: 1 }}>
          {currentStep === 1 ? (
            <UserForm />
          ) : currentStep === 2 ? (
            <PollForm questions={poll.questions} />
          ) : currentStep === 3 ? (
            <FinishForm description={poll.description} />
          ) : (
            ""
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PollSteps