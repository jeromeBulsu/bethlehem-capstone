import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Avatar,
  useMediaQuery,
  Grid,
} from "@mui/material";
import Header from "../../components/Header";
import HeaderMobile from "../../components/HeaderMobile";
import Footer from "../../components/Footer";
import backgroundImage from "../../assets/image/landpage2.png";
import CardPicture from "../../assets/image/landpage3.png";
import logo from "../../assets/image/logo.png";

import { Helmet } from "react-helmet";
const classes = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: { laptop: "170px", mobile: 0 },
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
      left: 0,
    },
  },
  mainbox: {
    position: "relative",
    width: "1000px",
    padding: { laptop: "70px 55px", mobile: "70px 0" },

    background: {
      laptop: "rgba(255, 255, 255, 0.8)",
      mobile: "rgba(255, 255, 255, 0.3)",
    },
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "relative",
    width: "350px",

    height: "85px",
  },
  subText: {
    fontSize: "15px",
    textAlign: "center",
  },
  cardholder: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "350px",
    height: "490px",
    background: (theme) => theme.palette.primary.main,
  },
};

export default function OurStory() {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const [sampleTitle] = useState(["title1", "title2", "title3", "title4"]);
  return (
    <Box>
      <Helmet>
        <title>Our Story</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {matches ? <HeaderMobile /> : <Header />}
      <Box sx={classes.root}>
        <Box sx={classes.mainbox}>
          <Avatar variant="square" src={logo} sx={classes.logo} />
          <Typography sx={classes.subText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Box sx={classes.cardholder}>
            <Grid
              container
              spacing={5}
              justifyContent="center"
              alignItems="center"
            >
              {sampleTitle.map((item) => (
                <Grid item>
                  <Card sx={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="186"
                        image={CardPicture}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          fontWeight="bold"
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {item}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer laoreet tortor nec quam malesuada, vel
                          posuere orci congue. Curabitur rutrum magna eget enim
                          porta, ut vulputate leo venenatis. Aliquam erat
                          volutpat. Mauris imperdiet erat ut pharetra ultricies.
                          Morbi tincidunt elementum tellus, at blandit tortor
                          rutrum in. Aenean et tortor sed diam egestas mattis
                          vel vitae mauris. Sed lobortis pellentesque nulla,
                          vitae feugiat lorem tempor vitae. Aliquam maximus
                          laoreet
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.primary"
                          display="flex"
                          justifyContent="flex-end"
                          mt={3}
                        >
                          <Box>Date Published:</Box>
                          <Box fontWeight="bold" ml={1}>
                            January 1, 1999
                          </Box>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
