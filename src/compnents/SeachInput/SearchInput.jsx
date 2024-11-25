import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ header = false }) => {
  return (
    <div style={{ width: "100%" }}>
      <TextField
        variant="outlined"
        placeholder="Search for..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                style={
                  header
                    ? { color: "#9CA3AF", marginLeft: 25 }
                    : { color: "#9CA3AF", marginLeft: 5 }
                }
              />
            </InputAdornment>
          ),
          sx: {
            padding: 0.5,
            border: "1px solid #333",
            "& .MuiInputBase-input": {
              padding: "8px 0", // Adjust the inner padding of the input field
            },
          },
        }}
        sx={{
          backgroundColor: "#091837",
          width: "100%",
          borderRadius: "6px",
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent ",
            },
            "&:hover fieldset": {
              borderColor: "transparent ",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent ",
            },
          },
        }}
      />
    </div>
  );
};

export default SearchInput;
