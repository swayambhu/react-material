/** @format */

import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone";
import EmployeeForm from "./EmployeeForm";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import useTable from "../../hooks/useTable";
import * as employeeService from "../../Services/employeeService";
import Controls from "../../components/Form Controls/Controls";
import Search from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../../components/Popup";

const Employees = () => {
  const classes = useStyles();
  const headCells = [
    { id: "fullName", label: "Employee Name" },
    { id: "email", label: "Email Address (Personal)" },
    { id: "mobile", label: "Mobile Number" },
    { id: "department", label: "Department" },
    { id: "actions", label: "Actions", disableSorting: true },
  ];
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const searchHandler = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value),
          );
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    employeeService.insertEmployee(employee);
    resetForm();
    setOpenPopup(false);
  };
  return (
    <>
      <PageHeader
        title='New Employee'
        subtitle='Form design with validation'
        icon={<PeopleAltTwoToneIcon fontSize='large' />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label='Search Employees'
            className={classes.searchInput}
            onChange={searchHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search />
                </InputAdornment>
              ),
            }}
          />

          <Controls.Button
            text='Add New'
            variant='outlined'
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => setOpenPopup(true)}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map(
              ({ id, fullName, email, mobile, department }) => (
                <TableRow key={id}>
                  <TableCell>{fullName}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{mobile}</TableCell>
                  <TableCell>{department}</TableCell>
                  <TableCell>
                    <Controls.ActionButton color='primary'>
                      <EditOutlinedIcon fontSize='small' />
                    </Controls.ActionButton>
                    <Controls.ActionButton color='secondary'>
                      <DeleteIcon fontSize='small' />
                    </Controls.ActionButton>
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title='Employee Form'
      >
        <EmployeeForm addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },

  newButton: {
    position: "absolute",
    right: "10px",
  },
}));
export default Employees;
