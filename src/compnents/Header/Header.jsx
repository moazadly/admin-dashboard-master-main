import { Box, Stack, Typography } from "@mui/material";
import SearchInput from "../SeachInput/SearchInput";
function Header() {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#fff",
          fontSize: "20px",
          fontWeight: "500",
          marginRight: { xs: 3, sm: 0 },
        }}
      >
        Users
      </Typography>
      <Box
        sx={{ display: { xs: "none", sm: "block" }, width: "80%", padding: 3 }}
      >
        <SearchInput header={true}></SearchInput>
      </Box>
      <button
        style={{
          color: "#fff",
          backgroundColor: "#CC3CFE",
          border: "none",
          outline: "none",
          padding: "16px 60px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add User
      </button>
    </Stack>
  );
}

export default Header;
