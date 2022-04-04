import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { GetAllusers } from "../services/api";
import AdminNavbar from "./AdminNavbar";
import LayoutAdmin from "./LayoutAdmin";
const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      // & > * means appply on every child
      background: "#000000",
      color: "#FFFFFF",
      fontSize: 20,
    },
  },
  row: {
    "& > *": {
      fontSize: 20,
    },
  },
});
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyle();
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const res = await GetAllusers();
    setUsers(res.data);
  };
  return (
    <LayoutAdmin>
      <Container>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>UserName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              return (
                <TableRow className={classes.row} key={user._id}>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </LayoutAdmin>
  );
};

export default AllUsers;
