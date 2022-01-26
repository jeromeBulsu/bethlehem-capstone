import React from "react";
import { Box, Button, Typography, TextField, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { setForgotPassword, setSent } from "../../redux/actions/userAction";
import Sent from "./Sent";
const classes = {
  mainsection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "300px",
    borderRadius: "20px",
    background: "#F0F0F0",
  },
  button: {
    marginTop: "28px",
    textTransform: "none",
    borderRadius: "100px",
    fontWeight: "bold",
    marginRight: "10px",
    width: "90px",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "20px",
  },
};

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [values, setValues] = React.useState({
    email: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleCloseSent = () =>{
      dispatch(setSent(!user.sent))
      dispatch(setForgotPassword(!user.forgotPassword))
  }
  const onSend = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, values.email)
      .then(() => {
        // Password reset email sent!
        // ..
        dispatch(setSent(!user.sent));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  return (
    <Box sx={classes.mainsection}>
      <Box>
        <Typography variant="h4" mb={1} fontWeight="bold">
          Forgot Password
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="action.active"
          sx={{ color: "#6b6b6b" }}
          mb={1}
        >
          Enter your email address
        </Typography>
      </Box>
      <Box>
        <TextField
          size="small"
          placeholder="Enter email address"
          color="action"
          label="Enter email address"
          onChange={handleChange("email")}
        ></TextField>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={classes.button}
          color="success"
          onClick={onSend}
        >
          Send
        </Button>
        <Modal open={user.sent} onClose={handleCloseSent}>
          <Box sx={classes.modal}>
            <Sent />
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
