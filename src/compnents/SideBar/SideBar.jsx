import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import logo from "../../Assets/images/logo.png";
import SearchInput from "../SeachInput/SearchInput";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import Star from "@mui/icons-material/Grade";
import PaymentIcon from "@mui/icons-material/Payment";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import TagIcon from "@mui/icons-material/Tag";
import EmailIcon from "@mui/icons-material/Email";
import Courses from "@mui/icons-material/OndemandVideo";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import Order from "@mui/icons-material/FileCopy";
import Protfolio from "@mui/icons-material/Extension";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { GlobalStyles } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const drawerWidth = 270;
const arr = [
  <AddHomeIcon style={{ color: "#888", fontSize: "22px" }} />,
  <PeopleAltIcon style={{ color: "#bd43ed", fontSize: "22px" }} />,
  <Order style={{ color: "#888", fontSize: "22px" }} />,
  <Star style={{ color: "#888", fontSize: "22px" }} />,
  <CreateNewFolderIcon style={{ color: "#888", fontSize: "22px" }} />,
  <Courses style={{ color: "#888", fontSize: "22px" }} />,
  <Protfolio style={{ color: "#888", fontSize: "22px" }} />,
  <WorkIcon style={{ color: "#888", fontSize: "22px" }} />,
  <MoneyIcon style={{ color: "#888", fontSize: "22px" }} />,
  <PaymentIcon style={{ color: "#888", fontSize: "22px" }} />,
  <NewspaperIcon style={{ color: "#888", fontSize: "22px" }} />,
  <TagIcon style={{ color: "#888", fontSize: "22px" }} />,
  <EmailIcon style={{ color: "#888", fontSize: "22px" }} />,
];
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  // "& .MuiDrawer-paper": {
  //   backgroundColor: "#081027", // Set the desired darker background color
  //   height: "auto",
  //   maxHeight: "100vh",
  //   overflowY: "auto",
  //   borderRadius: "0 0 8px 0",
  //   boxShadow: "0px 0px 1px 0px #666",
  // },
  "& .MuiDrawer-paper": {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      width: `calc(${theme.spacing(7)} + 1px)`,
    },
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": {
          ...openedMixin(theme),
          backgroundColor: "#081027",
          height: "auto",
          maxHeight: "100vh",
          overflowY: "auto",
          borderRadius: "0 0 8px  0", // Set the desired darker background color
          boxShadow: "0px 0px 1px 0px #666",
        },
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": {
          ...closedMixin(theme),
          backgroundColor: "#081027",
          height: "auto",
          maxHeight: "100vh",
          overflowY: "auto",
          borderRadius: "0 0 8px  0", // Set the desired darker background color
          boxShadow: "0px 0px 1px 0px #666",
        },
      },
    },
  ],
}));

export default function SideBar(props) {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#081027",
            margin: 0,
            padding: 0,
            fontFamily: "Roboto, sans-serif",
            fontSize: "14px",
            "@media (max-width: 600px)": {
              fontSize: "12px",
            },
          },
        }}
      />

      <Drawer variant="permanent" open={open}>
        {!open && (
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                color: "#888",
                px: 5.5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
        )}
        {open && (
          <DrawerHeader
            sx={{ display: "flex", flexDirection: "column", marginTop: 9.5 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              {" "}
              <div
                style={{ width: "100px", marginRight: "auto", marginLeft: 10 }}
              >
                <img src={logo} alt="" style={{ width: "100%" }} />
              </div>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon sx={{ color: "#666" }} />
              </IconButton>
            </div>
            <div style={{ width: "100%", padding: 10, marginTop: 4 }}>
              <SearchInput></SearchInput>
            </div>
          </DrawerHeader>
        )}

        <List>
          {[
            "Dashboard",
            "Users",
            "Orders",
            "Services",
            "Themes",
            "Courses",
            "Protfolio",
            "Jops",
            "Bills",
            "Payment",
            "Blogs",
            "About Us",
            "Contact Us",
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  {
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {arr[index]}
                  {/* {index % 2 === 0 ? (
                    <InboxIcon style={{ color: "#888", fontSize: "22px" }} />
                  ) : (
                    <MailIcon style={{ color: "#888", fontSize: "22px" }} />
                  )} */}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    style: {
                      fontSize: "12px", // Desired font size
                      fontWeight: "bold",
                    },
                  }}
                  sx={
                    text === "Users"
                      ? [
                          open
                            ? {
                                opacity: 1,
                                color: "#bd43ed",
                                marginLeft: "-16px",
                              }
                            : {
                                opacity: 0,
                              },
                        ]
                      : [
                          open
                            ? {
                                opacity: 1,
                                color: "#888",
                                marginLeft: "-16px",
                              }
                            : {
                                opacity: 0,
                              },
                        ]
                  }
                />
                {open && (
                  <ChevronRightIcon sx={{ color: "#666", fontSize: 15 }} />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: "#666" }} />
        <List>
          {["Settings", "Logout"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "block", color: "#888" }}
            >
              <ListItemButton
                sx={[
                  {
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {index % 2 === 0 ? (
                    <SettingsSuggestIcon
                      sx={{ color: "#888", fontSize: "22px" }}
                    />
                  ) : (
                    <LogoutIcon
                      sx={{
                        color: "#C70039",
                        fontSize: "22px",
                      }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    style: {
                      fontSize: "12px", // Desired font size
                      fontWeight: "bold",
                    },
                  }}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                          marginLeft: "-16px",
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
                {open && (
                  <ChevronRightIcon sx={{ color: "#666", fontSize: 15 }} />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={
          open
            ? {
                position: { xs: "absolute", md: "static" },
                p: { xs: "15px 24px 24px 24px", md: "0 24px 24px 24px" },
              }
            : {
                flexGrow: 1,
                p: { xs: "15px 24px 24px 24px", md: "0 24px 24px 24px" },
                backgroundColor: "#081027",
                width: "80%",
              }
        }
      >
        {props.children}
      </Box>
    </Box>
  );
}
