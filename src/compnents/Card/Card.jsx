import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TotalUsersCard = (props) => {
  const { title, number } = props;
  return (
    <Card
      sx={{
        backgroundColor: "#0A1739",
        color: "#fff",
        borderRadius: "6px",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        border: "1px solid #333",
      }}
    >
      {props.children}
      <CardContent
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          marginLeft: "10px",
          marginRight: "auto",
        }}
      >
        <Typography variant="subtitle1">{title}</Typography>
        <Typography
          variant="p"
          sx={{
            color: "#566486",
            fontWeight: "500",
            fontSize: "12px",
            letterSpacing: 0.05,
            marginTop: "-3px",
          }}
        >
          {number}
        </Typography>
      </CardContent>
      <IconButton>
        <MoreVertIcon sx={{ fontSize: 20, color: "#fff" }} />
      </IconButton>
    </Card>
  );
};

export default TotalUsersCard;
