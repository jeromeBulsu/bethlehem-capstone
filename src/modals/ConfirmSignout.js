import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { setConfirmSignout } from "../redux/actions/userAction";
const classes = {
  mainsection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "250px",
    borderRadius: "20px",
    background: "#F0F0F0",
  },
  logo: {
    height: "100px",
  },
  button: {
    marginTop: "28px",
    textTransform: "none",
    borderRadius: "100px",
    fontWeight: "bold",
    marginRight: "10px",
    width: "150px",
  },
};

export default function ConfirmDelete() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSignout = () => {
    dispatch(setConfirmSignout(!user.signout));
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleCancel = () => {
    dispatch(setConfirmSignout(!user.signout));
  }

  return (
    <Box sx={classes.mainsection}>
      
      <Box>
        <Typography variant="h3" mb={2} fontWeight="bold">
          Log out
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="action.active"
          sx={{ color: "#6b6b6b" }}
          textAlign="center"
        >
          You will be return to home page
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ ...classes.button, background: "gray", color: "white" }}
          onClick={handleCancel}
        >
          No, stay login
        </Button>
        <Button
          variant="contained"
          sx={classes.button}
          color="primary"
          onClick={handleSignout}
        >
          Log me out
        </Button>
      </Box>
    </Box>
  );
}
