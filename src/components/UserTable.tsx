import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import mockData from "../mockData";
import "../variables.css";

const UserTable: React.FC = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", minWidth: 150 },
    { field: "createdAt", headerName: "Member Since", minWidth: 200 },
    { field: "deletedAt", headerName: "Deleted At", minWidth: 150 },
    {
      field: "status",
      headerName: "Status",
      renderCell: (cellValues: any) => {
        return (
          <div
            style={{ color: cellValues.value === "deactive" ? "red" : "green" }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    { field: "groups", headerName: "Groups", minWidth: 250 },
    {
      field: "Actions",
      minWidth: 200,
      renderCell: () => {
        return (
          <>
            <IconButton aria-label="view" title="view">
              <InfoIcon />
            </IconButton>
            <IconButton aria-label="edit" title="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" title="delete">
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "var(--secondary-color)",
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: "var(--secondary-color)",
        },
      }}
    >
      <Typography
        variant="h6"
        marginBottom="15px"
        color={"var(--primary-color)"}
        data-testid="table-title"
      >
        Users
      </Typography>
      <DataGrid rows={mockData} columns={columns} data-testid="data-grid" />
    </Box>
  );
};

export default UserTable;
