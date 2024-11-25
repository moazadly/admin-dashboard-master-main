import React, { useState } from "react";
import "./Table.css";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import avatar from "../../Assets/images/images.webp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Mail from "@mui/icons-material/Work";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { Modal, Stack, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#0A1739",
  boxShadow: 24,
  p: 4,
  outline: "none",
  border: "1px solid #666",
  borderRadius: "5px",
  color: "#FFFFFF",
};

function TablePaginationDemo() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingY: "8px",
        borderRadius: "4px", // Optional: Rounded edges
      }}
    >
      <TablePagination
        component="div"
        count={460}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Rows per page:"
        labelDisplayedRows={() => ""} // Hides "x-xx of xxx"
        sx={{
          color: "#aaa", // Light gray text color
          "& .MuiTablePagination-selectLabel": {
            display: { xs: "none", sm: "block" }, // Hide on xs screens
          },
          "& .MuiTablePagination-input": {
            display: { xs: "none", sm: "flex" }, // Hide on xs screens
          },
          "& .MuiTablePagination-toolbar": {
            minHeight: "36px", // Compact size
          },
          "& .MuiSelect-select": {
            backgroundColor: "#0A1330",
            borderRadius: "5px",
            padding: 1,
            color: "#aaa",
          },
          "& .MuiSelect-icon": {
            color: "#aaa", // Dropdown icon color
          },
          "& .MuiTablePagination-actions button": {
            color: "#aaa", // Arrow buttons color
            backgroundColor: "#0A1330",
          },
          overflowX: "hidden",
        }}
      />
    </Box>
  );
}

const usersData = [
  {
    checked: true,
    name: "John Carter",
    phone: "+20 1116864236",
    location: "United States",
    email: "john@google.com",
    status: "Active",
  },
  {
    checked: false,
    name: "Sophie Moore",
    phone: "+20 1116864236",
    location: "United Kingdom",
    email: "john@google.com",
    status: "Inactive",
  },
  {
    checked: false,
    name: "Matt Cannon",
    phone: "+20 1116864236",
    location: "Australia",
    email: "john@google.com",
    status: "Inactive",
  },
  {
    checked: true,
    name: "Graham Hills",
    phone: "+20 1116864236",
    location: "India",
    email: "john@google.com",
    status: "Active",
  },
  {
    checked: true,
    name: "Sandy Houston",
    phone: "+20 1116864236",
    location: "Canada",
    email: "john@google.com",
    status: "Inactive",
  },
];

function Table() {
  const [users, setUsers] = useState(usersData);
  const [open, setOpen] = React.useState(false);
  const [clickedUser, setClickedUser] = useState(null);
  const handleOpen = (user) => {
    setOpen(true);
    setClickedUser(user);
  };
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box
        sx={{
          color: "white",
          border: "1px solid #ffffff29",
          backgroundColor: "#0a1739",
          borderRadius: "15px",
          fontFamily: "Arial, sans-serif",
          // boxShadow: "0px 0px 1px 0px",
        }}
      >
        <Stack
          // className="header"
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 20px 0 20px",
            marginBottom: "-1px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: "16px", fontWeight: 400, my: 2 }}
          >
            All Users
          </Typography>
          <Box>
            <span style={{ color: "#c240f6" }}>1 - 10 </span>
            <span style={{ color: "#aaa" }}>of 256</span>
          </Box>
        </Stack>
        <hr />
        <Box className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    checked
                    disabled
                  />
                </th>
                <th>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <PersonIcon
                      sx={{
                        fontSize: "18px",
                        marginRight: "6px",
                        color: "#ccc",
                      }}
                    />
                    Name
                    <UnfoldMoreIcon
                      sx={{
                        fontSize: "18px",
                        marginLeft: "4px",
                        color: "#666",
                      }}
                    />
                  </div>
                </th>
                <th>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {" "}
                    <LocalPhoneIcon
                      sx={{
                        fontSize: "18px",
                        marginRight: "6px",
                        color: "#ccc",
                      }}
                    />
                    Phone{" "}
                    <UnfoldMoreIcon
                      sx={{
                        fontSize: "18px",
                        marginLeft: "4px",
                        color: "#666",
                      }}
                    />
                  </div>
                </th>
                <th>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon
                      sx={{
                        fontSize: "18px",
                        marginRight: "6px",
                        color: "#ccc",
                      }}
                    />
                    Location
                    <UnfoldMoreIcon
                      sx={{
                        fontSize: "18px",
                        marginLeft: "4px",
                        color: "#666",
                      }}
                    />
                  </div>
                </th>
                <th>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Mail
                      sx={{
                        fontSize: "18px",
                        marginRight: "6px",
                        color: "#ccc",
                      }}
                    />
                    Email
                    <UnfoldMoreIcon
                      sx={{
                        fontSize: "18px",
                        marginLeft: "4px",
                        color: "#666",
                      }}
                    />
                  </div>
                </th>
                <th>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CheckBoxIcon
                      sx={{
                        fontSize: "18px",
                        marginRight: "6px",
                        color: "#ccc",
                      }}
                    />
                    Status{" "}
                    <UnfoldMoreIcon
                      sx={{
                        fontSize: "18px",
                        marginLeft: "4px",
                        color: "#666",
                      }}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  style={
                    index % 2 === 0
                      ? { backgroundColor: "#0A122C" }
                      : { backgroundColor: "#0a1739" }
                  }
                  onClick={(e) => {
                    console.log(e.view.innerWidth);
                    if (e.view.innerWidth <= 1250) handleOpen(user);
                  }}
                >
                  <td>
                    {user.checked === true ? (
                      <input
                        className="custom-checkbox"
                        type="checkbox"
                        checked
                        disabled
                      />
                    ) : (
                      <input
                        className="custom-checkbox"
                        type="checkbox"
                        disabled
                      />
                    )}
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "fit-content",
                      }}
                    >
                      <img
                        src={avatar}
                        alt="user"
                        style={{ width: "30%", marginRight: "10px" }}
                      ></img>
                      <span style={{ width: "fit-content", color: "#fff" }}>
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.location}</td>
                  <td>{user.email}</td>
                  <td>
                    <p className={`status-button ${user.status.toLowerCase()}`}>
                      <span style={{ marginRight: "7px" }}>&#x2022;</span>
                      {user.status}
                    </p>
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <Switch
                        name="loading"
                        disabled={true}
                        sx={{
                          width: 44, // Adjust width
                          height: 21, // Adjust height
                          padding: 0,
                          borderRadius: 8,
                          marginRight: 3.5,
                          "& .MuiSwitch-track": {
                            backgroundColor: "#1BC677",
                          },
                          "& .MuiSwitch-thumb": {
                            color: "#1BC677",
                            position: "absolute",
                            top: "8%",
                            left: "6%",
                          },
                        }}
                      />
                      <VisibilityIcon />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
      <div className="pagination">
        <span style={{ color: "#fff" }}>1-10 of 460</span>
        <TablePaginationDemo />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={avatar}
              alt="user"
              style={{ width: "20%", marginRight: "10px" }}
            ></img>
            {clickedUser?.name}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              marginTop: "30px",
            }}
          >
            {" "}
            <LocalPhoneIcon
              sx={{
                fontSize: "18px",
                marginRight: "6px",
                color: "#ccc",
              }}
            />
            Phone: {clickedUser?.phone}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              marginTop: "30px",
            }}
          >
            <LocationOnIcon
              sx={{
                fontSize: "18px",
                marginRight: "6px",
                color: "#ccc",
              }}
            />
            Location: {clickedUser?.location}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              marginTop: "30px",
            }}
          >
            <Mail
              sx={{
                fontSize: "18px",
                marginRight: "6px",
                color: "#ccc",
              }}
            />
            Email: {clickedUser?.email}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            <CheckBoxIcon
              sx={{
                fontSize: "18px",
                marginRight: "6px",
                color: "#ccc",
              }}
            />
            Status:{" "}
            <p
              className={`status-button ${clickedUser?.status.toLowerCase()}`}
              style={{ marginLeft: "10px" }}
            >
              <span style={{ marginRight: "7px" }}>&#x2022;</span>
              {clickedUser?.status}
            </p>
          </div>
        </Box>
      </Modal>
    </Box>
  );
}

export default Table;
