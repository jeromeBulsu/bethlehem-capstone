import React from "react";
import {
  Box,
  useMediaQuery,
  Typography,
  TextField,
  Grid,
  Autocomplete
} from "@mui/material";
import { Helmet } from "react-helmet";
import Header from "../../../components/Header";
import HeaderMobile from "../../../components/HeaderMobile";
import Footer from "../../../components/Footer";
import backgroundImage from "../../../assets/image/landpage2.png";
import Confirmation from "../../../components/appointment/Confirmation";
import HealthDeclaration from "../../../components/appointment/HealthDeclaration";

const classes = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "150px",
    paddingBottom: "150px",

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
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    background: "rgba(240, 240, 240, 0.9)"
  },
  button: {
    marginTop: "10px",
    borderRadius: "100px",
    fontWeight: "bold",
    textTransform: "none",
    width: "125px"
  },
  title: {
    background: (theme) => theme.palette.background.title,
    padding: { laptop: "25px 0px", tablet: "25px 0px", mobile: "25px" },
    borderRadius: "20px 20px 0px 0px ",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    justifyContent: "center"
  },
  content: {
    padding: { laptop: "50px 80px", tablet: "50px 30px", mobile: "20px" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  mainInfo: {
    width: { laptop: "450px", tablet: "450px", mobile: "280px" }
  },
  address: {
    marginBottom: "50px",
    width: { laptop: "650px", tablet: "650px", mobile: "280px" },
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: { laptop: "flex-start", tablet: "flex-start", mobile: "center" }
  },
  textFieldSmall: {
    maxWidth: { laptop: "150px", tablet: "150px", mobile: "136px" },
    background: "white"
  },
  textFieldLarge: {
    width: "100%",
    background: "white"
  },
  textFieldMedium: {
    width: { laptop: "318px", tablet: "318px", mobile: "280px" },
    background: "white"
  },
  textField: {
    width: { laptop: "200px", tablet: "200px", mobile: "120px" },
    background: "white"
  },
  gridLarge: {
    width: "100%"
  }
};
const sex = [
  {
    label: "Male"
  },
  {
    label: "Female"
  }
];
export default function Individual() {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const inputProps = {
    style: {
      fontSize: matches ? "10px" : "16px"
    }
  };
  const InputLabelProps = {
    style: {
      fontSize: matches ? "10px" : "16px",
      color: "gray"
    }
  };

  return (
    <Box>
      <Helmet>
        <title>Appointment Form (Individual)</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {matches ? <HeaderMobile /> : <Header />}

      <Box sx={classes.root}>
        <Box sx={classes.mainbox}>
          <Box sx={classes.title}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="tertiary.main"
              textAlign="center"
            >
              APPOINMENT FORM
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="tertiary.main"
              textAlign="center"
            >
              (INDIVIDUAL)
            </Typography>
          </Box>
          <Box sx={classes.content}>
            <Box sx={classes.mainInfo}>
              <Grid
                container
                spacing={matches ? 1 : 2}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item sx={classes.box}>
                  <TextField
                    sx={classes.textField}
                    size="small"
                    color="action"
                    label="Enter First Name"
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    sx={classes.textField}
                    size="small"
                    color="action"
                    label="Enter Last Name"
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    sx={classes.textField}
                    size="small"
                    color="action"
                    label="Enter Birth date"
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    sx={classes.textField}
                    size="small"
                    color="action"
                    label="Enter Occupation"
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
                <Grid item>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={sex}
                    size="small"
                    sx={classes.textField}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Sex"
                        color="action"
                        InputLabelProps={InputLabelProps}
                        inputProps={{ ...params.inputProps, ...inputProps }}
                      />
                    )}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    sx={classes.textField}
                    size="small"
                    color="action"
                    label="Enter Nationality"
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
              </Grid>
            </Box>
            <Box sx={classes.address}>
              <Typography>Address:</Typography>
              <Grid
                container
                spacing={matches ? 1 : 2}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <TextField
                    sx={classes.textFieldSmall}
                    size="small"
                    color="action"
                    label="Province"
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    sx={classes.textFieldSmall}
                    size="small"
                    color="action"
                    label="Municipality"
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    sx={classes.textFieldSmall}
                    size="small"
                    color="action"
                    label="Barangay"
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    sx={classes.textFieldSmall}
                    size="small"
                    color="action"
                    label="Zipcode"
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
                <Grid item sx={classes.gridLarge}>
                  <TextField
                    sx={classes.textFieldLarge}
                    size="small"
                    color="action"
                    label="Street/Building/Purok"
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    sx={classes.textFieldMedium}
                    size="small"
                    color="action"
                    label="Enter Email Address"
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    sx={classes.textFieldSmall}
                    size="small"
                    color="action"
                    label="Enter Phone No."
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    sx={classes.textFieldSmall}
                    size="small"
                    color="action"
                    label="Enter Telephone No."
                    inputProps={inputProps}
                    InputLabelProps={InputLabelProps}
                  ></TextField>
                </Grid>
              </Grid>
            </Box>
            <HealthDeclaration />
            <Confirmation />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
