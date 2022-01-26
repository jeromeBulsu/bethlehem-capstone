import React, { useEffect } from "react";
import { Box, Button, Modal } from "@mui/material";

import Sidebar from "../../components/admin/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import backgroundImage from "../../assets/image/landpage2.png";
import CarouselAdd from "../../modals/carousel/CarouselAdd";
import CarouselEdit from "../../modals/carousel/CarouselEdit";
import CarouselDelete from "../../modals/carousel/Delete";
import { Helmet } from "react-helmet";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase";
import {
  setCarousel,
  setCarouselCount,
  setDelete,
  setSelectedCarousel,
  setSelected,
  setAdd,
  setEdit,
} from "../../redux/actions/userAction";
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
  mainsection: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.8)",
    border: "0.5px",
  },
  subsection: {
    display: "flex",
    flexDirection: "row",
  },
  sidebar: {
    background: "rgba(99, 96, 96, 0.8)",
    borderRadius: "20px 0px 0px 20px",
    paddingTop: "37px",
    paddingLeft: "27px",
  },

  listsection: {
    background: "#F0F0F0", //gumamit muna ako ng backgroundcolor dito
    borderRadius: "0px 20px 20px 0px",
  },

  tableContainer: {
    height: "400px",
    margin: "40px",
    marginTop: "20px",
    width: "800px",

    borderRadius: "10px",
  },
  table: {
    "& .MuiDataGrid-columnHeaders": {
      background: (theme) => theme.palette.background.tableHeader,
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
    },
    "& .MuiSvgIcon-root": {
      color: (theme) => theme.palette.secondary.main,
    },

    "& .MuiDataGrid-row Mui-selected": {
      background: "red",
    },
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
  },
  button: {
    marginTop: "28px",
    textTransform: "none",
    borderRadius: "100px",
    fontWeight: "bold",
    marginRight: "10px",
    width: "90px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
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

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 150 },
  { field: "description", headerName: "Description", width: 150 },
  {
    field: "image",
    headerName: "Image",
    width: 150,
  },
  {
    field: "posted_date",
    headerName: "Date Posted",
    width: 150,
  },
];
const carouselRef = collection(db, "user", "carousel", "data");

export default function Carousel() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleAdd = async () => {
    const countRef = doc(db, "user", "carousel");
    const docSnap = await getDoc(countRef);
    const data = JSON.stringify(docSnap.data());
    const slice = data.slice(6);
    const slice2 = slice.slice(0, -1);
    dispatch(setCarouselCount(slice2));
    dispatch(setAdd(!user.add));
  };
  const handleEdit = () => {
    dispatch(setEdit(!user.edit));
  };
  const handleDelete = () => {
    dispatch(setDelete(!user.delete));
  };

  useEffect(() =>
    onSnapshot(carouselRef, (item) => {
      let carousel = [];

      item.forEach((doc) => {
        carousel.push({ ...doc.data(), uid: doc.id });
      });
      dispatch(setCarousel(carousel));
    })
  );

  useEffect(() => {
    const selected = [];
    user.selectedCarousel.forEach((result) => {
      user.carousel.forEach((result2) => {
        if (result === result2.id) {
          selected.push(result2);
        }
      });
    });
    dispatch(setSelected(selected));
  }, [user.edit]);

  return (
    <Box sx={classes.root}>
      <Helmet>
        <title>Carousel</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Box sx={classes.mainsection}>
        <Box sx={classes.subsection}>
          <Box sx={classes.sidebar}>
            <Sidebar />
          </Box>

          <Box sx={classes.listsection}>
            <Box sx={classes.buttonContainer}>
              <Button
                variant="contained"
                sx={classes.button}
                color="primary"
                onClick={handleAdd}
              >
                <AddCircleOutlineOutlinedIcon />
                Add
              </Button>
              <Modal open={user.add} onClose={handleAdd}>
                <Box sx={classes.modal}>
                  <CarouselAdd />
                </Box>
              </Modal>
              <Button
                variant="contained"
                sx={classes.button}
                color="success"
                onClick={handleEdit}
                disabled={user.selectedCarousel.length === 1 ? false : true}
              >
                <EditOutlinedIcon />
                Edit
              </Button>
              <Modal open={user.edit} onClose={handleEdit}>
                <Box sx={classes.modal}>
                  <CarouselEdit />
                </Box>
              </Modal>
              <Button
                variant="contained"
                sx={classes.button}
                color="warning"
                onClick={handleDelete}
                disabled={user.selectedCarousel.length > 0 ? false : true}
              >
                <DeleteIcon />
                Delete
              </Button>
              <Modal open={user.delete} onClose={handleDelete}>
                <Box sx={classes.modal}>
                  <CarouselDelete />
                </Box>
              </Modal>
            </Box>
            <Box sx={classes.tableContainer}>
              <DataGrid
                sx={classes.table}
                rows={user.carousel}
                columns={columns}
                checkboxSelection
                onSelectionModelChange={(i) => {
                  dispatch(setSelectedCarousel(i));
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
