import { Box } from "@mui/material";
import imgs from "../img";

import DashboardHeader from "../components/DashboardHeader";
import { getAllPollsInfo } from "../api";
import { useLoaderData } from "react-router-dom";
import TablePolls from "../components/TablePolls";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import CreatePollForm from "../components/FormsComponents/CreatePollForm";
import React from "react";
import { setPolls } from "../redux/pollsSlice";

export const loader = async () => {
  const res = await getAllPollsInfo();
  return res.data;
};

const Dashboard = () => {
  const currentMood = useSelector((state: RootState) => state.mood.currentMood);
  // const pollsStore = useSelector((state: RootState) => state.polls);

  const dispatch = useDispatch<AppDispatch>();

  const polls = useLoaderData();

  React.useEffect(() => {
    dispatch(setPolls(polls))
  }, [polls])

  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Box
        sx={{
          position: "relative",
          width: "18%",
          height: "100%",
        }}
      >
        <img
          src={imgs.Rectangle2}
          alt="Sample"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      <Box
        dir="rtl"
        sx={{
          width: "82%",
        }}
      >
        <DashboardHeader />

        {currentMood === "table" ? (
          <TablePolls />
        ) : currentMood === "create-poll" ? (
          <CreatePollForm />
        ) : (
          <h1>this are something wrong reload the page pleaseeeee</h1>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
