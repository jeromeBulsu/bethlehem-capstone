import React from "react";
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { Helmet } from "react-helmet";
import Header from "../../../components/Header";
import HeaderMobile from "../../../components/HeaderMobile";
import Footer from "../../../components/Footer";
import backgroundImage from "../../../assets/image/landpage2.png";
import { useHistory } from "react-router-dom";
const classes = {
  root: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      background: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.4,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    }
  },
  mainbox: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: { laptop: "30px 100px", mobile: "70px 40px" },
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.8)"
  },
  button: {
    marginTop: "10px",
    borderRadius: "100px",
    fontWeight: "bold",
    textTransform: "none",
    width: "125px"
  }
};

export default function Index() {
  const history = useHistory("");
  const matches = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  return (
    <Box>
      <Helmet>
        <title>About us</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {matches ? <HeaderMobile /> : <Header />}

      <Box sx={classes.root}>
        <Box sx={classes.mainbox}>
          <Typography color="secondary" fontWeight="bold" variant="h6">
            Choose an Appointment:
          </Typography>
          <Button
            sx={classes.button}
            variant="contained"
            onClick={() => history.push("appointment/individual/form")}
          >
            Individual
          </Button>
          <Button
            sx={classes.button}
            variant="contained"
            onClick={() => history.push("appointment/organization/form")}
          >
            Organization
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
