// import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import PrimarySearchAppBar from "../PrimarySearch/PrimarySearch";
// import { InputBase } from "@mui/material";
// // import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import SearchBar from "material-ui-search-bar";
// import userService from "../../services/user.service";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 100,
//   },
// });

// // export default function BasicTable() {
// export default function Seeeearcgfiter() {
//   const [institutions, setInstitutions] = useState([]);
//   const [searched, setSearched] = useState("");
//   const classes = useStyles();
//   const user = localStorage.getItem("user");

//   const handleClick = () => {
//     console.log("Hello");
//   };
//   useEffect(() => {
//     userService.getInstitutionByLocation(user.location).then((res) => {
//       console.log(res);
//     });
//   }, []);
//   useEffect(() => {
//     userService.getAllInstitutions().then((res) => {
//       console.log("i", res.data.institutions);
//       setInstitutions(res.data.institutions);
//     });
//   }, []);
//   const requestSearch = (searchedVal) => {
//     const filteredRows = institutions.filter((row) => {
//       return row.institution.toLowerCase().includes(searchedVal.toLowerCase());
//     });
//     setInstitutions(filteredRows);
//   };

//   const cancelSearch = () => {
//     setSearched("");
//     requestSearch(searched);
//   };

//   return (
//     <>
//       <Paper>
//         <SearchBar
//           value={searched}
//           onChange={(searchVal) => requestSearch(searchVal)}
//           onCancelSearch={() => cancelSearch()}
//         />
//         <TableContainer>
//           <Table className={classes.table} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Institution(s)</TableCell>
//                 <TableCell align="center">Location</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {institutions.map((institution) => (
//                 <TableRow key={institution._id}>
//                   <TableCell component="th" scope="institution">
//                     <NavLink to={`/home/${institution._id}/teacher`}>
//                       {" "}
//                       {institution.name}
//                     </NavLink>
//                   </TableCell>
//                   <TableCell align="center" onClick={handleClick}>
//                     {institution.location}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>
//       <br />
//     </>
//   );
// }
