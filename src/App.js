import "./App.css";
import TotalUsersCard from "./compnents/Card/Card";
import Header from "./compnents/Header/Header";
import SideBar from "./compnents/SideBar/SideBar";
import StyledDataTable from "./compnents/Table/Table";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Grid2, Stack } from "@mui/material";

function App() {
  return (
    // <div className="App" style={{ margin: "10px" }}>
    <SideBar>
      <Header></Header>
      <Grid2
        container
        size={12}
        spacing={2}
        sx={{
          justifyContent: "space-between",
          marginTop: "35px",
          marginBottom: "85px",
          width: "100%",
        }}
      >
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <TotalUsersCard title={"Total Users"} number={250}>
            <PeopleIcon
              sx={{
                fontSize: 40,
                color: "#C944FC",
                backgroundColor: "#311D61",
                borderRadius: "50%",
                padding: 1,
              }}
            />
          </TotalUsersCard>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <TotalUsersCard title={"New Users"} number={15}>
            <PersonIcon
              sx={{
                fontSize: 40,
                color: "#F8B835",
                backgroundColor: "#3B3735",
                borderRadius: "50%",
                padding: 1,
              }}
            />
          </TotalUsersCard>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <TotalUsersCard title={"Top Users"} number={200}>
            <FavoriteIcon
              sx={{
                fontSize: 40,
                color: "#03C367",
                backgroundColor: "#0A393C",
                borderRadius: "50%",
                padding: 1,
              }}
            />
          </TotalUsersCard>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <TotalUsersCard title={"Other Users"} number={35}>
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#062A61",
                borderRadius: "50%",
                position: "relative",
              }}
            >
              <MoreHorizIcon
                sx={{
                  fontSize: 15,
                  color: "#074182",
                  backgroundColor: "#096CDA",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </TotalUsersCard>
        </Grid2>
      </Grid2>
      <Box sx={{ width: "100%" }}>
        <StyledDataTable />
      </Box>
    </SideBar>
    // </div>
  );
}

export default App;
