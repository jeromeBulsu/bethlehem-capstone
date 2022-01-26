import React from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const classes = {
  mainsection: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: "520px",
    borderRadius: "20px",

    background: "#F0F0F0"
  },
  headertext: {
    fontWeight: "bold",
    fontSize: "30px",
    color: "#495500",
    padding: "50px 80px 25px 80px",
    textAlign: "center"
  },
  fields: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  textfields: {
    background: "white",
    width: "280px",
    marginBottom: "20px"
  },
  imagetext: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
    fontSize: "15px"
  },
  button: {
    background: "white",
    color: "black",
    width: "90px",
    marginBottom: "30px",
    textTransform: "lowercase"
  }
};

const Input = styled("input")({
  display: "none"
});

export default function CarouselAdd() {
  const InputLabelProps = {
    style: {
      color: "gray"
    }
  };

  return (
    <Box sx={classes.mainsection}>
      <Typography sx={classes.headertext}> Add New Story </Typography>
      <Box sx={classes.fields}>
        <TextField
          variant="outlined"
          size="small"
          label="Enter Title"
          placeholder="Enter Title"
          color="action"
          InputLabelProps={InputLabelProps}
          sx={classes.textfields}
        />
        <TextField
          label="Enter Description"
          multiline
          rows={4}
          placeholder="Enter Description"
          color="action"
          InputLabelProps={InputLabelProps}
          sx={classes.textfields}
        />
        <Box>
          <Typography sx={classes.imagetext}> insert an image: </Typography>
          <Stack alignItems="center">
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <Button variant="outlined" component="span" sx={classes.button}>
                insert
              </Button>
            </label>
          </Stack>
        </Box>
        <Button
          variant="contained"
          sx={{ width: "180px", textTransform: "lowercase" }}
        >
          {" "}
          add{" "}
        </Button>
      </Box>
    </Box>
  );
}
