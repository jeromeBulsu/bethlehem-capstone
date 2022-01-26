import React from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  FormControlLabel,
  styled,
  Switch
} from "@mui/material";
import No from "../../assets/image/NO.png";
import Yes from "../../assets/image/YES.png";

const classes = {
  mainbox: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  title: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  content: {
    padding: { laptop: "30px 0px", tablet: "50px 0px", mobile: "20px 10px" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  mainInfo: {
    width: { laptop: "450px", tablet: "450px", mobile: "280px" }
  },
  box: {
    padding: {
      laptop: "12px 15px",
      tablet: "12px 15px",
      mobile: "0px 0px"
    },
    paddingRight: {
      laptop: "none",
      tablet: "none",
      mobile: "50px"
    },
    width: {
      laptop: "200px",
      tablet: "200px",
      mobile: "120px"
    },
    border: "1px solid #929292",
    background: "#FFFFFF",
    display: "flex",

    justifyContent: "space-between"
  },
  largeBox: {
    padding: "12px 15px",
    width: {
      laptop: "417px",
      tablet: "417px",
      mobile: "300px"
    },
    border: "1px solid #929292",
    background: "#FFFFFF",
    display: "flex",
    alignItems: "center",

    paddingRight: "40px"
  },
  textSmall: {
    fontSize: {
      laptop: "12px",
      tablet: "12px",
      mobile: "10px"
    }
  },
  textLarge: {
    fontSize: {
      laptop: "16px",
      tablet: "16px",
      mobile: "12px"
    }
  }
};

export default function HealthDeclaration() {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("tablet"));

  const style = {
    minWidth: matches ? "130px" : "150px"
  };
  const style1 = {
    minWidth: matches ? "100px" : "150px"
  };

  const StyledSwitch = styled(Switch)(({ theme }) => ({
    marginLeft: matches ? "3px" : "10px",
    width: matches ? "none" : "60px",
    padding: matches ? 4 : 0,

    "& .Mui-checked": {
      "& + .MuiSwitch-track": {
        opacity: 1
      }
    },

    "& .MuiSwitch-track": {
      borderRadius: 100 / 2,
      background: theme.palette.primary.main,

      opacity: 1,
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 20,
        height: 20
      },

      "&:before": {
        backgroundImage: `url(${Yes})`,
        opacity: 1,
        filter: "invert()",
        backgroundRepeat: "no-repeat",
        backgroundSize: matches ? "13px 8px" : "17px 10px",
        backgroundPosition: "center",
        left: 5
      },
      "&:after": {
        backgroundImage: `url(${No})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: matches ? "13px 8px" : "17px 10px",
        backgroundPosition: "center",
        right: 5
      }
    },
    "& .MuiSwitch-thumb": {
      background: "#040267",
      boxShadow: "none",
      width: matches ? 20 : 29,
      height: matches ? 20 : 29,
      margin: matches ? 0 : -4
    }
  }));

  return (
    <Box>
      <Box sx={classes.mainbox}>
        <Box sx={classes.title}>
          <Typography variant="h5" fontWeight="bold" color="secondary">
            HEALTH DECLARATION
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
                <Box sx={classes.box}>
                  <FormControlLabel
                    label={
                      <Typography sx={classes.textLarge}>
                        Sore throat
                      </Typography>
                    }
                    labelPlacement="start"
                    control={<StyledSwitch color="warning" />}
                    style={style1}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box sx={classes.box}>
                  <FormControlLabel
                    label={
                      <Typography sx={classes.textLarge}>Headache</Typography>
                    }
                    labelPlacement="start"
                    control={<StyledSwitch color="warning" />}
                    style={style1}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box sx={classes.box}>
                  <FormControlLabel
                    label={
                      <Typography sx={classes.textLarge}>Body Pain</Typography>
                    }
                    labelPlacement="start"
                    style={style1}
                    control={<StyledSwitch color="warning" />}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box sx={classes.box}>
                  <FormControlLabel
                    label={
                      <Typography sx={classes.textLarge}>Fever</Typography>
                    }
                    labelPlacement="start"
                    control={<StyledSwitch color="warning" />}
                    style={style1}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box sx={classes.largeBox}>
                  <FormControlLabel
                    label={
                      <Typography sx={classes.textSmall}>
                        Worked or stayed together in the same close environment
                        of a confirmed COVID-19 case:
                      </Typography>
                    }
                    labelPlacement="start"
                    control={<StyledSwitch color="warning" />}
                    style={style}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box sx={classes.largeBox}>
                  <FormControlLabel
                    label={
                      <Typography sx={classes.textSmall}>
                        Worked or stayed together in the same close environment
                        of a confirmed COVID-19 case:
                      </Typography>
                    }
                    labelPlacement="start"
                    control={<StyledSwitch color="warning" />}
                    style={style}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box sx={classes.largeBox}>
                  <FormControlLabel
                    label={
                      <Typography sx={classes.textSmall}>
                        Worked or stayed together in the same close environment
                        of a confirmed COVID-19 case:
                      </Typography>
                    }
                    labelPlacement="start"
                    control={<StyledSwitch color="warning" />}
                    style={style}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
