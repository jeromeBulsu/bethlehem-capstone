import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import logo from "../assets/image/logo.png";
const classes = {
  appbar: {
    background: "white",
    opacity: 0.8
  },
  menu: {
    marginLeft: "10px"
  },
  inquire: {
    background: (theme) => theme.palette.primary.main,

    marginTop: "20px"
  },
  logo: {
    width: "120px",
    height: "30px",
    marginLeft: "10px"
  }
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const history = useHistory("");
  return (
    <Box>
      <AppBar position="fixed" elevation={0} sx={classes.appbar}>
        <Toolbar>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            alignContent="center"
          >
            <Grid item xs={8}></Grid>
            <Grid item xs={8}>
              <Avatar variant="square" src={logo} sx={classes.logo}></Avatar>
            </Grid>
          </Grid>
          <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => {
              setOpen(true);
            }}
          >
            <Typography variant="h5">
              <Box fontWeight="fontWeightMedium" fontStyle="italic" m={1}>
                <IconButton onClick={() => setOpen(false)}>
                  <KeyboardBackspace />
                  <Avatar
                    variant="square"
                    src={logo}
                    sx={classes.logo}
                  ></Avatar>
                </IconButton>
              </Box>
            </Typography>
            <Divider />
            <Box>
              <List>
                <ListItem button>
                  <HomeIcon color="action" />
                  <ListItemText
                    disableTypography
                    primary={<Typography>home</Typography>}
                    sx={classes.menu}
                    onClick={() => history.push("/home")}
                  />
                </ListItem>
                <ListItem button>
                  <AutoStoriesIcon color="action" />
                  <ListItemText
                    disableTypography
                    primary={<Typography>our story</Typography>}
                    sx={classes.menu}
                    onClick={() => history.push("/ourstory")}
                  />
                </ListItem>
                <ListItem button>
                  <InfoIcon color="action" />
                  <ListItemText
                    disableTypography
                    primary={<Typography>about us</Typography>}
                    sx={classes.menu}
                    onClick={() => history.push("/aboutus")}
                  />
                </ListItem>
                <ListItem button sx={classes.inquire}>
                  <ListItemText
                    disableTypography
                    onClick={() => history.push("/appointment")}
                    primary={
                      <Typography fontWeight="bold">
                        <CalendarTodayIcon style={{ marginRight: "10px" }} />
                        schedule appointment
                      </Typography>
                    }
                    sx={classes.menu}
                  />
                </ListItem>
              </List>
            </Box>
          </SwipeableDrawer>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}
