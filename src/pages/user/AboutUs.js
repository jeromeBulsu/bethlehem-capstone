import React, { useState } from "react";
import { Box, useMediaQuery, Avatar, Typography, Grid } from "@mui/material";
import Header from "../../components/Header";
import HeaderMobile from "../../components/HeaderMobile";

import { Helmet } from "react-helmet";
import logo from "../../assets/image/logoyellow.png";

const classes = {
  root: {
    background: (theme) => theme.palette.background.defaultRadial,
    paddingTop: { laptop: "200px", mobile: "150px" },
    paddingBottom: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: {
      laptop: "600px",
      mobile: "300px"
    },
    height: {
      laptop: "150px",
      mobile: "80px"
    }
  },
  description: {
    fontSize: { mobile: "13px", laptop: "16px" },
    textAlign: "center"
  },
  secondSection: {
    padding: { laptop: "70px 0px", mobile: "50px 30px" },
    width: { laptop: "850px", mobile: "none" },
    display: "flex",
    flexDirection: {
      laptop: "row",
      mobile: "column"
    },
    justifyContent: "space-between"
  },
  missionVission: {
    width: { laptop: "370px", mobile: "none" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  thirdSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: { laptop: "0px 200px", mobile: "0px 30px" }
  },
  staff: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  lastSection: {
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 50px"
  },
  firstSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: { laptop: "0px 200px", mobile: "0px 30px" }
  }
};

export default function App() {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const [staff] = useState([
    "INSERT NAME",
    "INSERT NAME",
    "INSERT NAME",
    "INSERT NAME",
    "INSERT NAME",
    "INSERT NAME",
    "INSERT NAME"
  ]);
  const [position] = useState([
    "POSITION",
    "POSITION",
    "POSITION",
    "POSITION",
    "POSITION",
    "POSITION",
    "POSITION"
  ]);
  return (
    <Box sx={classes.root}>
      <Helmet>
        <title>About us</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {matches ? <HeaderMobile /> : <Header />}
      <Box sx={classes.firstSection}>
        <Box>
          <Avatar variant="square" sx={classes.logo} src={logo} />
        </Box>
        <Typography variant="body" sx={classes.description}>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at
          augue at elit auctor vulputate. Vivamus fringilla egestas ipsum non
          tempus. Pellentesque rutrum justo massa. Fusce a purus in justo cursus
          pretium. Etiam a nisl egestas libero viverra commodo. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Quisque nec mollis felis, at sollicitudin lorem. Sed finibus massa
          luctus mattis mollis.
        </Typography>
      </Box>

      <Box sx={classes.secondSection}>
        <Box sx={classes.missionVission}>
          <Typography
            variant={matches ? "h3" : "h2"}
            fontWeight="bold"
            color="text.aboutTitle"
          >
            MISSION
          </Typography>
          <Typography sx={classes.description} mb={matches ? 5 : 0}>
            Sed dignissim at velit et varius. Maecenas vulputate ac dolor nec
            suscipit. Aliquam luctus dolor non maximus bibendum. Mauris
            porttitor lectus nibh, ut porttitor nibh sodales at. Proin a elit
            neque. Pellentesque fermentum euismod sagittis.
          </Typography>
        </Box>
        <Box sx={classes.missionVission}>
          <Typography
            variant={matches ? "h3" : "h2"}
            fontWeight="bold"
            color="text.aboutTitle"
          >
            VISSION
          </Typography>
          <Typography sx={classes.description}>
            Sed dignissim at velit et varius. Maecenas vulputate ac dolor nec
            suscipit. Aliquam luctus dolor non maximus bibendum. Mauris
            porttitor lectus nibh, ut porttitor nibh sodales at. Proin a elit
            neque. Pellentesque fermentum euismod sagittis.
          </Typography>
        </Box>
      </Box>
      <Box sx={classes.thirdSection}>
        <Typography
          variant={matches ? "h4" : "h3"}
          fontWeight="bold"
          color="text.aboutTitle"
          textAlign="center"
        >
          ORGANIZATION STAFFS
        </Typography>
        <Typography variant="h4" fontWeight="bold" mt={2}>
          INSERT NAME
        </Typography>
        <Typography variant="h5" lineHeight={0.5} mb={2}>
          POSITION
        </Typography>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={6}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {staff.map((item, index) => (
            <Grid item sx={classes.staff}>
              <Typography
                variant={matches ? "h6" : "h5"}
                fontWeight="bold"
                mt={2}
              >
                {item}
              </Typography>
              <Typography variant={matches ? "body" : "h6"} lineHeight={0.5}>
                {position[index]}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={classes.lastSection}>
        <Typography textAlign="center">PHONE NUMBER</Typography>
        <Typography textAlign="center">LANDLINE NUMBER</Typography>
        <Typography textAlign="center">FACEBOOK PAGE</Typography>
        <Typography textAlign="center">COLLABORATE ORGANIZATION</Typography>
        <Typography textAlign="center">SISTER COMPANY</Typography>
        <Typography textAlign="center">
          ORGANIZATION LICENSE (PROOF OF LEGALITY)
        </Typography>
      </Box>
    </Box>
  );
}
