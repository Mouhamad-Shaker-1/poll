import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <TextField
      sx={{
        marginTop: '-30px',
        borderRadius: "28px",
        width: "60%",
        height: "1rem",
        "& .MuiOutlinedInput-root": {
          borderRadius: "28px",
          textAlign: "right",
          padding: "0 1em",
          height: "3rem",
        },
      }}
      placeholder="البحث"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchInput;
