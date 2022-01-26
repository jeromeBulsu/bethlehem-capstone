import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const classes = {
  mainsection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "300px",
    borderRadius: "20px",
    background: "#F0F0F0",
  },
  button: {
    marginTop: "28px",
    textTransform: "none",
    borderRadius: "100px",
    fontWeight: "bold",
    marginRight: "10px",
    width: "90px",
  },
  logo: {
    height: "100px",
  },
};

export default function Sent() {
  return (
    <Box sx={classes.mainsection}>
      <Box sx={classes.logo}>
        <CheckCircleOutlineIcon
          style={{ height: "inherit", width: "inherit" }}
          color="success"
        />
      </Box>
      <Box>
        <Typography variant="h4" mb={1} fontWeight="bold">
          Success
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="action.active"
          sx={{ color: "#6b6b6b" }}
          mb={1}
        >
          Email has been sent please check your email
        </Typography>
      </Box>
    </Box>
  );
}
