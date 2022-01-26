import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  useMediaQuery
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

const classes = {
  mainbox: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    marginTop: "10px",
    borderRadius: "100px",
    fontWeight: "bold",
    textTransform: "none",
    width: "125px"
  },
  title: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  content: {
    padding: { laptop: "20px 0px", tablet: "20px 0px", mobile: "20px 0px" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  mainInfo: {
    width: { laptop: "150px", tablet: "150px", mobile: "280px" }
  },
  calendar: {
    width: "250px",
    background: "white"
  },
  file: {
    width: "195px",
    background: "white"
  },
  calendarLabel: {
    fontSize: {
      laptop: "16px",
      tablet: "16px",
      mobile: "12px"
    }
  }
};

export default function Confirmation() {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const [value, setValue] = React.useState(null);

  const onClick = (event) => {
    event.target.value = null;
  };

  return (
    <Box>
      <Box sx={classes.mainbox}>
        <Box sx={classes.title}>
          <Typography variant="h5" fontWeight="bold" color="secondary">
            CONFIRMATION
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
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    label={
                      <Typography sx={classes.calendarLabel}>
                        enter date of visitation
                      </Typography>
                    }
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        sx={classes.calendar}
                        color="secondary"
                        size="small"
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid
                item
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Typography>add file or attachment: </Typography>

                <Button
                  component="label"
                  variant="text"
                  color="secondary"
                  sx={classes.file}
                >
                  <input type="file" onClick={onClick} required />
                </Button>
              </Grid>
              <Grid item>
                <Button sx={classes.button} variant="contained">
                  Confirm
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
