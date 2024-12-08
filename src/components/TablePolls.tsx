import {
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HeaderTablePolls from "./HeaderTablePolls";
import Point from "./Point";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import imgs from "../img";
import { deletePoll } from "../redux/pollsSlice";
import { deletePollFromAPI } from "../api";

const TablePolls: React.FC = () => {
  const polls = useSelector((state: RootState) => state.polls.polls);
  const dispatch = useDispatch<AppDispatch>();

  const [visibleAllPolls, setVisibleAllPolls] = React.useState(false);

  const handleShowMore = () => {
    setVisibleAllPolls((prevState) => !prevState); 
  };

  const handleDeletePoll = async (idPoll: number) => {
    console.log(idPoll);
    try {
      await deletePollFromAPI(idPoll);
      dispatch(deletePoll(idPoll));
    } catch (error) {
      console.log(error);
    }
  };

  const styleTabelHeaderCell = {
    fontFamily: "Cairo",
    fontSize: ".9rem",
    fontWeight: "400",
    textAlign: "center",
    color: "#71778E",
  };
  const styleTabelBodyCell = {
    fontFamily: "Cairo",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    textAlign: "center",
  };

  return (
    <Box
      sx={{
        margin: "1em",
        padding: ".5em",
        boxShadow: "0px 2px 20px 4px #1E146A0D",
      }}
      dir="rtl"
    >
      <HeaderTablePolls />

      <TableContainer
        sx={{
          marginTop: "1em",
          width: "100%",
          height: "500px",
          overflowY: "scroll",
        }}
        dir="rtl"
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...styleTabelHeaderCell, textAlign: "right" }}>
                الاسم
              </TableCell>
              <TableCell sx={styleTabelHeaderCell}>عدد الأسئلة</TableCell>
              <TableCell sx={styleTabelHeaderCell}>النتيجة</TableCell>
              <TableCell sx={styleTabelHeaderCell}>وصف بسيط</TableCell>
              <TableCell sx={styleTabelHeaderCell}>تفاصيل</TableCell>
              <TableCell sx={styleTabelHeaderCell}>الاجراء</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {polls.length !== 0 &&
              polls
                .slice(0, visibleAllPolls ? polls.length : 6)
                .map((poll: any) => (
                  <TableRow>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: ".8em",
                        }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: "grey.500",
                            width: "30px",
                            height: "30px",
                          }}
                        />
                        <Typography sx={styleTabelBodyCell}>
                          {poll.title}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={styleTabelBodyCell}>
                      {poll.questions.length}
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: ".8em",
                        }}
                      >
                        <Typography sx={styleTabelBodyCell}>21,33%</Typography>
                        <Point />
                      </Box>
                    </TableCell>
                    <TableCell sx={styleTabelBodyCell}>
                      {poll.description}
                    </TableCell>
                    <TableCell
                      sx={{
                        ...styleTabelBodyCell,
                        color: "#007B8D",
                        cursor: "pointer",
                      }}
                    >
                      عرض
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: ".8em",
                          marginTop: "1em",
                        }}
                      >
                        <img
                          style={{
                            cursor: "pointer",
                          }}
                          src={imgs.VectorDelete}
                          onClick={() => handleDeletePoll(poll.id)}
                        />
                        <img
                          style={{
                            cursor: "pointer",
                          }}
                          src={imgs.VectorEdite}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        <Button
          onClick={handleShowMore}
          sx={{
            fontFamily: "Cairo",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "24px",
            marginTop: "1em",
            display: "block",
            margin: ".5em auto",
          }}
        >
          {visibleAllPolls ? "عرض اقل" : "المزيد"}
        </Button>
      </TableContainer>
    </Box>
  );
};

export default TablePolls;
