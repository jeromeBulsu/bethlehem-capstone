import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import {
  collection,
  addDoc,
  updateDoc,
  increment,
  doc
} from "firebase/firestore";
import { db, storage } from "../../utils/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  setImage,
  setTitle,
  setDescription,
  setImageName,
  setAdd
} from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

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
    padding: "50px 70px 25px 70px",
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

    textTransform: "lowercase"
  }
};

export default function CarouselAdd() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const InputLabelProps = {
    style: {
      color: "gray"
    }
  };

  const [progress, setProgress] = useState("");

  const handleChangeTitle = (event) => {
    dispatch(setTitle(event.target.value));
  };
  const handleChangeDescription = (event) => {
    dispatch(setDescription(event.target.value));
  };
  const onFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setProgress(1);
    const storageRef = ref(storage, `/images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    dispatch(setImageName(file.name));
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setTimeout(function() {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100 + 1
          );
          setProgress(prog);
        }, 3000);
      },
      (err) => alert(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          dispatch(setImage(url))
        );
      }
    );
  };

  const onAdd = async (e) => {
    e.preventDefault();
    const carouselRef = collection(db, "user", "carousel", "data");
    const carouselCount = doc(db, "user", "carousel");
    if (user.image === "" || user.description === "" || user.title === "") {
      alert("Please complete fields");
    } else {
      alert("added");
      dispatch(setAdd(!user.add))
      await addDoc(carouselRef, {
        id: user.carouselCount,
        title: user.title,
        description: user.description,
        image: user.image,
        image_name: user.imageName,
        posted_date: moment(new Date()).subtract(10, "days").calendar()
      })
        .then(async () => {
          await updateDoc(carouselCount, {
            id: increment(1)
          })
        })

    }
    
  };

  return (
    <Box sx={classes.mainsection}>
      <Typography sx={classes.headertext}> Add New Carousel </Typography>
      <Box sx={classes.fields}>
        <TextField
          onChange={handleChangeTitle}
          variant="outlined"
          size="small"
          label="Enter Title"
          placeholder="Enter Title"
          color="action"
          InputLabelProps={InputLabelProps}
          sx={classes.textfields}
        />
        <TextField
          onChange={handleChangeDescription}
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
          <Button
            sx={{ ...classes.button, marginBottom: progress === "" ? 3 : 0 }}
          >
            <input
              accept="image/*"
              onChange={onFileChange}
              multiple
              type="file"
            />
          </Button>
          <Typography
            display={progress === "" ? "none" : "flex"}
            justifyContent="center"
            mb={progress === "" ? 0 : 3}
          >
            {progress === 101
              ? "Upload Completed"
              : `Image Uploading... ${progress}%`}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ width: "180px", textTransform: "lowercase" }}
          onClick={onAdd}
          disabled={progress === 101 ? false : true}
        >
          add
        </Button>
      </Box>
    </Box>
  );
}
