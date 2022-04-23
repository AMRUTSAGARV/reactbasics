import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PrimarySearchAppBar from "../PrimarySearch/PrimarySearch";
import { InputBase } from "@mui/material";

import SearchBar from "material-ui-search-bar";
import UserFooter from "../UserFooter/UserFooter";
import { NavLink, useParams } from "react-router-dom";
import userService from "../../services/user.service";

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

export default function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  const [searched, setSearched] = useState("");
  const classes = useStyles();

  const handleClick = () => {
    console.log("Hello");
  };

  const requestSearch = (searchedVal) => {
    const filteredRows = teachers.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setTeachers(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  const { institutionId } = useParams();

  useEffect(() => {
    userService.getTeacherByInstitution(institutionId).then((res) => {
      setTeachers(res.data.teacher);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <PrimarySearchAppBar />
      <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Teacher(s)</TableCell>
                <TableCell align="center">Subject</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Experience</TableCell>
              </TableRow>
            </TableHead>
            {teachers.length ? (
              teachers.map((teacher) => (
                <TableBody>
                  <TableRow key={teacher.name}>
                    <TableCell component="th" scope="row">
                      <NavLink
                        to={`/home/${institutionId}/teacher/${teacher._id}`}
                      >
                        {teacher.fullName}
                      </NavLink>
                    </TableCell>
                    <TableCell align="center" onClick={handleClick}>
                      {teacher.subject}
                    </TableCell>
                    <TableCell align="center">{teacher.email}</TableCell>
                    <TableCell align="center">{teacher.phoneNumber}</TableCell>
                    <TableCell align="center">
                      {teacher.experience} years
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))
            ) : (
              <div>No Teachers In This Institution</div>
            )}
          </Table>
        </TableContainer>
      </Paper>
      <br />
      {/* <a
        target="_blank"
        href="https://smartdevpreneur.com/the-easiest-way-to-implement-material-ui-table-search/"
      >
        Learn how to add search and filter to Material-UI Table here.
      </a> */}
      <UserFooter />
    </>
  );
}
