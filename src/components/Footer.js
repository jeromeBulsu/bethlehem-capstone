import React from "react";

import { Box, Typography, Avatar } from "@mui/material";
import logo from "../assets/image/logo.png";
const classes = {
  root: {
    padding: { laptop: "30px 100px", mobile: "20px 40px" },
    display: "flex",
    justifyContent: "space-between"
  },
  contacts: {},
  logo: {
    width: { laptop: "150px", mobile: "130px" },
    height: { laptop: "40px", mobile: "30px" }
  },
  logoContainter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: { laptop: "14px", mobile: "10px" }
  }
};

export default function Footer() {
  return (
    <Box bgcolor="background.footer" sx={classes.root}>
      <Box sx={classes.contacts}>
        <Typography sx={classes.text}>Phone Number</Typography>
        <Typography sx={classes.text}>Landline Number</Typography>
        <Typography sx={classes.text}>Facebook Page Link</Typography>
        <Typography sx={classes.text}>Contact Us</Typography>
      </Box>
      <Box sx={classes.logoContainter}>
        <Avatar variant="square" src={logo} sx={classes.logo} />
        <Typography sx={classes.text}>LITTLE BAGUIO, POBLACION</Typography>
        <Typography sx={classes.text}>BALIUAG, BULACAN</Typography>
      </Box>
    </Box>
  );
}
