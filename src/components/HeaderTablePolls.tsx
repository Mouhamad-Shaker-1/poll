import { Box, Button, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setMood } from "../redux/moodSlice";


const HeaderTablePolls = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleCreatePoll = () => {
    // this to chnage the component render to go to create form
    dispatch(setMood('create-poll'))
  }

    return (
        <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Cairo",
            fontSize: "1.3rem",
            fontWeight: "600",
          }}
        >
          الاستطلاعات
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: ".7em",
          }}
        >
          <Button
            sx={{
              borderRadius: "12px",
              backgroundColor: "#E7E9ED",
              color: '#007B8D',
              fontFamily: "Cairo",
              fontSize: ".9rem",
              fontWeight: "600",
            }}
            variant="contained"
          >
            تصدير لأكسل
          </Button>
          <Button
            sx={{
              borderRadius: "12px",
              backgroundColor: "#007B8D",
              fontFamily: "Cairo",
              fontSize: ".9rem",
              fontWeight: "700",
            }}
            variant="contained"
            onClick={handleCreatePoll}
          >
            إيضافة
          </Button>
        </Box>
      </Box>
    )
}

export default HeaderTablePolls