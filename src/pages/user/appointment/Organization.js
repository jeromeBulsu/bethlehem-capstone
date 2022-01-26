import React, { useState } from "react";
import {
  Box,
  useMediaQuery,
  Typography,
  TextField,
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Modal
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
    width: "80px"
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
    background: "White"
  },
  textFieldLarge: {
    width: "100%",
    background: "white"
  },

  textFieldMedium: {
    width: { laptop: "318px", tablet: "318px", mobile: "280px" },
    background: "White"
  },
  gridlarge: {
    width: "100%"
  },
  table: {
    marginTop: "10px",
    width: { laptop: "100%", tablet: "100%", mobile: "280px" },
    marginBottom: "30px"
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4
  }
};


export default function Individual() {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rows] = useState([
    { id: "73", foo: "bar" },
    { id: "45", foo: "bar" }
  ]);
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
        <title>Appointment Form (Organization)</title>
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
              (ORGANIZATION)
            </Typography>
          </Box>
          <Box sx={classes.content}>
            <Box sx={classes.mainInfo}>
              <TextField
                sx={classes.textFieldLarge}
                size="small"
                color="action"
                label="Enter Group or Organization’s Name"
                inputProps={inputProps}
                InputLabelProps={InputLabelProps}
              ></TextField>
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
                <Grid item sx={classes.gridlarge}>
                  <TextField
                    sx={{ ...classes.textFieldLarge }}
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
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography>add respondent</Typography>
              <Button
                sx={classes.button}
                onClick={handleOpen}
                variant="contained"
                size="small"
              >
                Add
              </Button>
            </Box>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={classes.modal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  add respondent
                </Typography>

                <Grid
                  container
                  spacing={1}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <TextField
                      sx={classes.textFieldSmall}
                      size="small"
                      color="action"
                      label="First Name."
                      inputProps={inputProps}
                      InputLabelProps={InputLabelProps}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      sx={classes.textFieldSmall}
                      size="small"
                      color="action"
                      label="First Name."
                      inputProps={inputProps}
                      InputLabelProps={InputLabelProps}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      sx={classes.textFieldSmall}
                      size="small"
                      color="action"
                      label="Last Name."
                      inputProps={inputProps}
                      InputLabelProps={InputLabelProps}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      sx={classes.textFieldSmall}
                      size="small"
                      color="action"
                      label="Gender"
                      inputProps={inputProps}
                      InputLabelProps={InputLabelProps}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      sx={classes.textFieldSmall}
                      size="small"
                      color="action"
                      label="Age"
                      inputProps={inputProps}
                      InputLabelProps={InputLabelProps}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      sx={classes.textFieldSmall}
                      size="small"
                      color="action"
                      label="Nationality"
                      inputProps={inputProps}
                      InputLabelProps={InputLabelProps}
                    ></TextField>
                  </Grid>
                </Grid>
              </Box>
            </Modal>
            <TableContainer component={Paper} sx={classes.table}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell align="center">First Name</TableCell>
                    <TableCell align="center">Last Name</TableCell>
                    <TableCell align="center">Gender</TableCell>
                    <TableCell align="center">Birthdate</TableCell>
                    <TableCell align="center">Nationality</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 }
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <HealthDeclaration />
            <Confirmation />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
