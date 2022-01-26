import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Modal } from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { styled } from "@mui/material/styles";
import { Link, useHistory } from "react-router-dom";
import { setConfirmSignout } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import ConfirmSignout from "../../modals/ConfirmSignout"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const classes = {
  root: {
    display: "flex",
    flexDirection: "column",
  },
  sidebartext: {
    fontWeight: "Bold",
    fontSize: "20px",
    color: "#ECE20C",
    marginBottom: "15px",
    marginRight: "60px",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "20px",
  },
};

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "18px",

    color: theme.palette.text.calendar,
    "&.Mui-selected": {
      color: theme.palette.text.primary,
      background: "white",

      borderTopLeftRadius: "100px",
      borderBottomLeftRadius: "100px",
    },
  })
);

const StyledTab2 = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "20px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: theme.palette.text.calendar,
    "&.Mui-selected": {
      color: theme.palette.text.primary,
      background: "white",

      borderTopLeftRadius: "100px",
      borderBottomLeftRadius: "100px",
    },
  })
);

export default function Admin() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const history = useHistory();
  const indexToTabName = {
    "/admin/accounts": "1",
    "/admin/list": "2",
    "/admin/stories": "3",
    "/admin/carousel": "4",
  };
  const [tabnumber, setTabnumber] = useState(
    indexToTabName[window.location.pathname]
  );
  const handleChange = () => {
    history.push(window.location.pathname);
  };

  const signout = () => {
    dispatch(setConfirmSignout(!user.signout));
  };
  return (
    <Box sx={classes.root}>
      <Typography sx={classes.sidebartext}> Administrator </Typography>
      <Box sx={{ background: "white", height: "2px" }}></Box>
      <Tabs
        orientation="vertical"
        value={tabnumber}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
      >
        <Typography fontSize="20px" color="text.calendar" fontWeight="bold">
          <LayersIcon />
          Layout
        </Typography>
        <StyledTab
          value="4"
          label="Carousel"
          to="/admin/carousel"
          component={Link}
        />
        <StyledTab
          value="3"
          label="Stories"
          to="/admin/stories"
          component={Link}
        />
        <Box
          sx={{
            background: "white",
            height: "1px",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        ></Box>
        <StyledTab2
          label={
            <Typography fontSize="20px" fontWeight="bold">
              <ListAltIcon />
              List
            </Typography>
          }
          value="2"
          to="/admin/list"
          component={Link}
        />
        <StyledTab2
          label={
            <Typography fontSize="20px" fontWeight="bold">
              <AccountCircleIcon />
              Accounts
            </Typography>
          }
          value="1"
          to="/admin/accounts"
          component={Link}
        />
        <StyledTab2
    
          label={
            <Typography fontSize="20px" fontWeight="bold">
              <ExitToAppIcon />
              Signout
            </Typography>
          }
          onClick={signout}
        />
        <Modal open={user.signout} onClose={signout}>
          <Box sx={classes.modal}>
            <ConfirmSignout />
          </Box>
        </Modal>
      </Tabs>
    </Box>
  );
}
