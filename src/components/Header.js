import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Toolbar,
  Avatar,
  Tabs,
  Tab,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import logo from "../assets/image/logo.png";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";

const classes = {
  root: {
    position: "fixed",
    background: "rgba(255, 255, 255, .8)",
    padding: "15px",
  },
  logo: {
    height: "42px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    textTransform: "none",
    fontSize: "15px",
    fontWeight: (theme) => theme.typography.fontWeightBold,
    display: "flex",
  },
};

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "20px",
    marginRight: theme.spacing(1),
    color: theme.palette.text.primary,
    "&.Mui-selected": {
      color: theme.palette.secondary.main,
    },
  })
);

export default function Header() {
  const history = useHistory();
  const indexToTabName = {
    "/home": "1",
    "/ourstory": "2",
    "/aboutus": "3",
  };
  const [tabnumber, setTabnumber] = useState(
    indexToTabName[window.location.pathname]
  );
  const handleChange = () => {
    if (window.location.pathname === "/home") {
      setTabnumber(indexToTabName["/home"]);
    }
    if (window.location.pathname === "/ourstory") {
      setTabnumber(indexToTabName["/ourstory"]);
    }
    if (window.location.pathname === "/aboutus") {
      setTabnumber(indexToTabName["/aboutus"]);
    }
    history.push(window.location.pathname);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar sx={classes.root}>
        <Toolbar sx={classes.toolbar}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            onClick={() => history.push("/home")}
          >
            <Box sx={classes.logo}>
              <Avatar
                variant="square"
                alt="Remy Sharp"
                src={logo}
                style={{ width: "inherit", height: "inherit" }}
              />
            </Box>
          </IconButton>
          <Box>
            <Router>
              <Tabs
                value={tabnumber}
                onClick={handleChange}
                textColor="text.primary"
                indicatorColor="secondary"
              >
                <StyledTab value="1" label="home" to="/home" component={Link} />
                <StyledTab
                  value="2"
                  label="our story"
                  to="/ourstory"
                  component={Link}
                />
                <StyledTab
                  value="3"
                  label="about us"
                  to="/aboutus"
                  component={Link}
                />
              </Tabs>
            </Router>
          </Box>
          <Button
            color="primary"
            variant="contained"
            sx={classes.button}
            onClick={() => history.push("/appointment")}
          >
            <CalendarTodayIcon />
            <Box ml={1} mt={1}>
              <Typography fontWeight="bold" fontSize="13px" lineHeight="0">
                schedule an
              </Typography>
              <Typography fontWeight="bold">appointment</Typography>
            </Box>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
