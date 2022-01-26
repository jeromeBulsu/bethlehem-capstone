import React from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "../../components/admin/Sidebar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import backgroundImage from "../../assets/image/landpage2.png";
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

    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
  },
  button: {
    marginTop: "28px",
    textTransform: "none",
    borderRadius: "100px",
    fontWeight: "bold",
    marginRight: "10px",
    width: "120px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "organization", headerName: "Organization", width: 150 },
  { field: "firstName", headerName: "First Name", width: 150 },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 150,
  },
  {
    field: "birthDate",
    headerName: "Birth Date",
    width: 150,
  },
  {
    field: "sex",
    headerName: "Sex",
    width: 60,
  },
  {
    field: "nationality",
    headerName: "Nationality",
    width: 150,
  },
  {
    field: "province",
    headerName: "Province",
    width: 100,
  },
  {
    field: "municipality",
    headerName: "Municipality",
    width: 100,
  },
  {
    field: "barangay",
    headerName: "Barangay",
    width: 100,
  },
  {
    field: "street",
    headerName: "Street",
    width: 100,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 150,
  },
  {
    field: "telephone",
    headerName: "Telephone",
    width: 100,
  },
  {
    field: "q1",
    headerName: "Q1",
    width: 50,
  },
  {
    field: "q2",
    headerName: "Q2",
    width: 50,
  },
  {
    field: "q3",
    headerName: "Q3",
    width: 50,
  },
  {
    field: "q4",
    headerName: "Q4",
    width: 50,
  },
  {
    field: "q5",
    headerName: "Q5",
    width: 50,
  },
  {
    field: "q6",
    headerName: "Q6",
    width: 50,
  },
  {
    field: "q7",
    headerName: "Q7",
    width: 50,
  },
  {
    field: "dateInquired",
    headerName: "Date Inquired",
    width: 120,
  },
  {
    field: "attachment",
    headerName: "Attachment",
    width: 100,
  },
  {
    field: "code",
    headerName: "Code",
    width: 100,
  },
  {
    field: "dateVisited",
    headerName: "Date Visited",
    width: 100,
  },
];

const rows = [
  { id: 1, organization: "Snow", sex: "Female", date: 35, image: "123123" },
];

export default function List() {
  return (
    <Box sx={classes.root}>
      <Helmet>
        <title>List</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Box sx={classes.mainsection}>
        <Box sx={classes.subsection}>
          <Box sx={classes.sidebar}>
            <Sidebar />
          </Box>
          <Box sx={classes.listsection}>
            <Box sx={classes.buttonContainer}>
              <Button variant="contained" sx={classes.button} color="primary">
                <DownloadIcon />
                Download
              </Button>
              <Button variant="contained" sx={classes.button} color="success">
                <EditOutlinedIcon />
                Edit
              </Button>
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
