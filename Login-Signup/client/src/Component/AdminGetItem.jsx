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
import LayoutAdmin from "./LayoutAdmin";

import { deleteitem, getitem } from "../services/api";
import { Link } from "react-router-dom";

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
  image: {
    height: "100px",
    width: "100px",
    // marginInlineStart: "17px",
  },
});
const AdminGetItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);
  const classes = useStyle();
  const getItems = async () => {
    const res = await getitem();
    // console.log(res);
    setItems(res.data);
  };

  const deleteItem = async (id) => {
    await deleteitem(id);
    getItems();
  };

  return (
    <LayoutAdmin>
      <Container fixed>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Id</TableCell>
              <TableCell>itemImage</TableCell>
              <TableCell>name</TableCell>
              <TableCell>description</TableCell>
              <TableCell>price</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* <h1>Hello and u see iteam </h1> */}
            {items.map((item) => {
              const imgpath =
                "http://localhost:8000/public/images/" + item.profile;
              return (
                <TableRow className={classes.row} key={item._id}>
                  <TableCell>{item._id}</TableCell>
                  <TableCell>
                    <img className={classes.image} src={imgpath} alt="img" />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginRight: 10 }}
                      component={Link}
                      to={`/getitems/${item._id}`}
                    >
                      EDIT
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        deleteItem(item._id);
                      }}
                    >
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </LayoutAdmin>
  );
};

export default AdminGetItem;
