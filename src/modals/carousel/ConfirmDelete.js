import React from "react";
import { Box, Button, Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import { useDispatch, useSelector } from "react-redux";
import {
  setConfirmDelete,
  setDelete,
  setSelectedCarousel,
} from "../../redux/actions/userAction";
import { db } from "../../utils/firebase";
import {
  doc,
  deleteDoc,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";
const classes = {
  mainsection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "350px",
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
    width: "90px",
  },
};

export default function ConfirmDelete() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleConfirmDelete = () => {
    dispatch(setDelete(!user.delete));
    dispatch(setConfirmDelete(!user.confirmDelete));
  };

  const onDelete = async () => {
    alert("deleted");
    dispatch(setSelectedCarousel(0));

    dispatch(setConfirmDelete(false));
    dispatch(setDelete(false));
    user.selectedCarousel.forEach(async (result) => {
      const q = query(
        collection(db, "user", "carousel", "data"),
        where("id", "==", result)
      );
      const snapshot = await getDocs(q);
      const results = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      results.forEach(async (result) => {
        const docRef = doc(db, "user", "carousel", "data", result.id);
        await deleteDoc(docRef);
      });
    });
  };

  return (
    <Box sx={classes.mainsection}>
      <Box sx={classes.logo}>
        <WarningIcon
          style={{ height: "inherit", width: "inherit" }}
          color="warning"
        />
      </Box>
      <Box>
        <Typography variant="h3" mb={2} fontWeight="bold">
          Are you sure?
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="action.active"
          sx={{ color: "#6b6b6b" }}
          textAlign="center"
        >
          Do you really want to delete this record? This process cannot be
          undone
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ ...classes.button, background: "gray", color: "white" }}
          onClick={handleConfirmDelete}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={classes.button}
          color="warning"
          onClick={onDelete}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
