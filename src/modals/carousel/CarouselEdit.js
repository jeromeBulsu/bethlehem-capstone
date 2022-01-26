import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../utils/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  setImage,
  setTitle,
  setDescription,
  setImageName,
  setEdit
} from "../../redux/actions/userAction";
import moment from "moment";
const classes = {
  mainsection: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: "550px",
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
  imagetext: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
    fontSize: "15px",
  },
  button: {
    background: "white",
    color: "black",
    textTransform: "lowercase",
  },
};

export default function CarouselEdit() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [uid, setId] = useState("");
  const InputLabelProps = {
    style: {
      color: "gray",
    },
  };

  const handleChangeTitle = (event) => {
    dispatch(setTitle(event.target.value));
  };
  const handleChangeDescription = (event) => {
    dispatch(setDescription(event.target.value));
  };

  const [progress, setProgress] = useState(0);
  const onFileChange = (e) => {
    e.preventDefault();
    setProgress(1);
    const file = e.target.files[0];
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

  const onEdit = async () => {
    const carouselRef = doc(db, "user", "carousel", "data", uid);
    if (user.description === "" || user.title === "") {
      alert("Please complete fields");
    } else {


      alert("Edited");
      dispatch(setEdit(!user.edit));
      if (progress === 101) {
        await updateDoc(carouselRef, {
          title: user.title,
          description: user.description,
          image: user.image,
          image_name: user.imageName,
          posted_date: moment(new Date()).subtract(10, "days").calendar(),
        });
      } else {
        await updateDoc(carouselRef, {
          title: user.title,
          description: user.description,
          posted_date: moment(new Date()).subtract(10, "days").calendar(),
        });
      }
    }
  };

  useEffect(() => {
    user.selected.forEach((doc) => {
      setId(doc.uid);
    });
  }, [onEdit]);

  return (
    <Box sx={classes.mainsection}>
      <Typography sx={classes.headertext}> Edit Carousel </Typography>
      {user.selected.map((item, index) => (
        <Box sx={classes.fields}>
          <TextField
            variant="outlined"
            size="small"
            label="Edit Title"
            placeholder="Edit Title"
            color="action"
            InputLabelProps={InputLabelProps}
            sx={classes.textfields}
            defaultValue={item.title}
            onChange={handleChangeTitle}
          />
          <TextField
            label="Edit Description"
            multiline
            rows={4}
            placeholder="Edit Description"
            color="action"
            InputLabelProps={InputLabelProps}
            sx={classes.textfields}
            defaultValue={item.description}
            onChange={handleChangeDescription}
          />
          <Box>
            <Typography sx={classes.imagetext}>insert an image:</Typography>
            <Typography sx={classes.imagetext} fontWeight="bold">
              {item.image_name}{" "}
            </Typography>
            <Button
              sx={{ ...classes.button, marginBottom: progress === 0 ? 3 : 0 }}
            >
              <input
                accept="image/*"
                onChange={onFileChange}
                multiple
                type="file"
              />
            </Button>

            <Typography
              display={progress === 0 ? "none" : "flex"}
              justifyContent="center"
              mb={progress === 0 ? 0 : 3}
            >
              {progress === 101
                ? "Upload Completed"
                : `Image Uploading... ${progress}%`}
            </Typography>
          </Box>
          <Button
            onClick={onEdit}
            disabled={progress === 101 || progress === 0 ? false : true}
            variant="contained"
            sx={{
              width: "180px",
              textTransform: "lowercase",
            }}
            color="success"
          >
            {" "}
            edit{" "}
          </Button>
        </Box>
      ))}
    </Box>
  );
}
