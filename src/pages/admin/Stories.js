import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";

import Sidebar from "../../components/admin/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import backgroundImage from "../../assets/image/landpage2.png";
import StoriesAdd from "../../modals/stories/StoriesAdd";
import StoriesEdit from "../../modals/stories/StoriesEdit";
import { Helmet } from "react-helmet";
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
    background: "#F0F0F0",
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
    field: "date",
    headerName: "Date",
    width: 150,
  },
];

const rows = [
  { id: 1, title: "Snow", description: "Jon", date: 35, image: "123123" },
  {
    id: 2,
    title: "Lannister",
    description: "Cersei",
    date: 42,
    image: "123123",
  },
];

export default function Carousel() {
  const [state, setState] = useState({
    add: false,
    edit: false,
    //
  });

  const handleAdd = () => {
    setState({ ...state, add: !state.add });
  };
  const handleEdit = () => {
    setState({ ...state, edit: !state.edit });
  };
  return (
    <Box sx={classes.root}>
      <Helmet>
        <title>Stories</title>
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
              <Modal
                open={state.add}
                onClose={handleAdd}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={classes.modal}>
                  <StoriesAdd />
                </Box>
              </Modal>
              <Button
                variant="contained"
                sx={classes.button}
                color="success"
                onClick={handleEdit}
              >
                <EditOutlinedIcon />
                Edit
              </Button>
              <Modal
                open={state.edit}
                onClose={handleEdit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={classes.modal}>
                  <StoriesEdit />
                </Box>
              </Modal>
              <Button variant="contained" sx={classes.button} color="warning">
                <DeleteIcon />
                Delete
              </Button>
            </Box>
            <Box sx={classes.tableContainer}>
              <DataGrid
                sx={classes.table}
                rows={rows}
                columns={columns}
                checkboxSelection
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
