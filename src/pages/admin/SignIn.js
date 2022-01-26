import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Avatar,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Modal,
} from "@mui/material";
import { Helmet } from "react-helmet";
import logo from "../../assets/image/logoyellow.png";
import backgroundImage from "../../assets/image/landpage2.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { setForgotPassword } from "../../redux/actions/userAction";
import ForgotPassword from "../../modals/signIn/ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
const classes = {
  root: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
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
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.8)",
  },
  button: {
    marginTop: "10px",
    borderRadius: "100px",
    fontWeight: "bold",
    textTransform: "none",
    width: "125px",
  },
  firstSection: {
    display: "flex",
    flexDirection: "column",
    padding: "90px 60px",
  },
  secondSection: {
    display: {
      laptop: "flex",
      tablet: "flex",
      mobile: "none",
    },
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(112, 107, 0, 0.5)",
    height: "100%",
    width: "100%",
    borderRadius: "0px 20px 20px 0px",
    padding: "90px 60px",
  },
  logo2: {
    height: "74px",
    width: "290px",
  },
  logo1: {
    height: "120px",
    width: "120px",
    marginBottom: "10px",
  },
  textField: {
    margin: "10px",
    width: "200px",
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

export default function Signin() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleForgotPassword = () => {
    dispatch(setForgotPassword(!user.forgotPassword));
  };

  const signin = (event) => {
    const auth = getAuth();
    event.preventDefault();
    if (!values.email || !values.password) {
      alert("Please complete all fields!");
    } else {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in

          alert("Welcome " + values.email);

          // ...
        })
        .catch((error) => {
          // var errorCode = error.code;
          var errorMessage = error.message;
          // ..
          alert(errorMessage);
        });
    }
  };

  return (
    <Box>
      <Helmet>
        <title>Sign In</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <Box sx={classes.root}>
        <Box sx={classes.mainbox}>
          <Box sx={classes.firstSection}>
            <Typography variant="h4" fontWeight="bold" color="secondary">
              Login
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              <TextField
                variant="outlined"
                label="Email"
                size="small"
                color="action"
                sx={classes.textField}
                onChange={handleChange("email")}
              ></TextField>
              <FormControl
                sx={classes.textField}
                size="small"
                variant="outlined"
                color="action"
              >
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <Button sx={classes.button} variant="contained" onClick={signin}>
                Login
              </Button>
              <Button
                color="secondary"
                style={{ backgroundColor: "transparent", marginTop: "20px" }}
                onClick={handleForgotPassword}
              >
                Forgot password?
              </Button>
              <Modal open={user.forgotPassword} onClose={handleForgotPassword}>
                <Box sx={classes.modal}>
                  <ForgotPassword />
                </Box>
              </Modal>
            </Box>
          </Box>
          <Box sx={classes.secondSection}>
            <Avatar variant="square" sx={classes.logo1} />
            <Avatar src={logo} variant="square" sx={classes.logo2} />
            <Typography
              color="text.calendar"
              sx={classes.logo2}
              textAlign="center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eleifend ligula nec dapibus molestie.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
