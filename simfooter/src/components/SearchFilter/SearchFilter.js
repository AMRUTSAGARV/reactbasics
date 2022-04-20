import React, { useState } from "react";
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
// import SearchBar from "../SearchBar/SearchBar";
import SearchBar from "material-ui-search-bar";
// import Search from "@material-ui/icons/Search";

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const originalRows = [
  {
    name: "Saji Mathew",
    subject: "Mathematics",
    email: "saji008@gmail.com",
    phone: 949822124,
    age: 40,
  },
  {
    name: "Sreekumar",
    subject: "Physics",
    email: "sreekumar22@gmail.com",
    phone: 8281227724,
    age: 32,
  },
  {
    name: "Meril",
    subject: "CS",
    email: "meril08@gmail.com",
    phone: 9873736324,
    age: 34,
  },
  {
    name: "Antony",
    subject: "Botany",
    email: "antony123@gmail.com",
    phone: 9836363624,
    age: 33,
  },
  {
    name: "Dennis",
    subject: "Chemistry",
    email: "dennis22@gmail.com",
    phone: 8848230424,
    age: 32,
  },
  {
    name: "Isac",
    subject: "Economics",
    email: "isak09@gmail.com",
    phone: 9746392224,
    age: 40,
  },
];

export default function BasicTable() {
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const classes = useStyles();

  const handleClick = () => {
    console.log("Hello");
  };

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
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
                <TableCell align="center">Email&nbsp;</TableCell>
                <TableCell align="center">Phone&nbsp;</TableCell>
                <TableCell align="center">Age&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center" onClick={handleClick}>
                    {row.subject}
                  </TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
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
    </>
  );
}
