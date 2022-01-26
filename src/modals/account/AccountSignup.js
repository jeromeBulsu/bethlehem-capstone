import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const classes = {
  mainsection: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
    borderRadius: "20px",
    background: "#F0F0F0",
  },
  headertext: {
    fontWeight: "bold",
    fontSize: "30px",
    color: "#495500",
    padding: "50px 80px 25px 80px",
    textAlign: "center",
  },
  fields: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textfields: {
    background: "white",
    width: "280px",
    marginBottom: "20px",
  },
  button: {
    background: "white",
    color: "black",
    width: "90px",
    marginBottom: "30px",
    textTransform: "lowercase",
  },
};

export default function AccountSignup() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const InputLabelProps = {
    style: {
      color: "gray",
    },
  };

  const onSignin = () => {
    if (
      values.email === "" ||
      values.password === "" ||
      values.confirmPassword === ""
    ) {
      alert("Please complete all fields");
    } else if (values.password !== values.confirmPassword) {
      alert("Password mismatch");
    } else if (values.password.length <= 5) {
      alert("Password should be at least 6 characters");
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          alert("Your account has been created successfully!");
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
    }
  };

  return (
    <Box sx={classes.mainsection}>
      <Typography sx={classes.headertext}> Create Account </Typography>
      <Box sx={classes.fields}>
        <TextField
          variant="outlined"
          size="small"
          label="Email address"
          placeholder="Email address"
          color="action"
          InputLabelProps={InputLabelProps}
          onChange={handleChange("email")}
          sx={classes.textfields}
        />
        <TextField
          variant="outlined"
          type="password"
          size="small"
          label="Password"
          placeholder="Password"
          color="action"
          InputLabelProps={InputLabelProps}
          onChange={handleChange("password")}
          sx={classes.textfields}
        />
        <TextField
          variant="outlined"
          type="password"
          size="small"
          label="Confirm Password"
          placeholder="Confirm Password"
          color="action"
          InputLabelProps={InputLabelProps}
          onChange={handleChange("confirmPassword")}
          sx={classes.textfields}
        />
        <Button
          variant="contained"
          sx={{ width: "180px", textTransform: "lowercase" }}
          onClick={onSignin}
        >
          {" "}
          add{" "}
        </Button>
      </Box>
    </Box>
  );
}
