import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import CarouselConfirmDelete from "../carousel/ConfirmDelete";
import { useDispatch, useSelector } from "react-redux";
import { setDelete, setConfirmDelete } from "../../redux/actions/userAction";
const classes = {
  mainsection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "300px",
    borderRadius: "20px",
    background: "#F0F0F0"
  },
  logo: {
    height: "100px"
  },
  button: {
    marginTop: "28px",
    textTransform: "none",
    borderRadius: "100px",
    fontWeight: "bold",
    marginRight: "10px",
    width: "90px"
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
    borderRadius: "20px"
  }
};

export default function Delete() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleDelete = () => {
    dispatch(setDelete(!user.delete));
  };
  const handleConfirmDelete = () => {
    dispatch(setConfirmDelete(!user.confirmDelete));
  };
  return (
    <Box sx={classes.mainsection}>
      <Box sx={classes.logo}>
        <DangerousOutlinedIcon
          style={{ height: "inherit", width: "inherit" }}
          color="warning"
        />
      </Box>
      <Box>
        <Typography variant="h3" mb={2} fontWeight="bold">
          WARNING
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="action.active"
          sx={{ color: "#6b6b6b" }}
        >
          Are you sure you want to delete?
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ ...classes.button, background: "gray", color: "white" }}
          onClick={handleDelete}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={classes.button}
          color="warning"
          onClick={handleConfirmDelete}
        >
          Delete
        </Button>
        <Modal open={user.confirmDelete} onClose={handleConfirmDelete}>
          <Box sx={classes.modal}>
            <CarouselConfirmDelete />
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
