import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LayoutAdmin from "./LayoutAdmin";
import { AddItems } from "../services/api";

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& >*": {
      marginTop: 20,
    },
  },
});

const initialvalue = {
  profile: "",
  name: "",
  description: "",
  price: "",
};

const AdminAddItem = () => {
  const [item, setItems] = useState(initialvalue);
  const { profile, name, description, price } = item;
  const classes = useStyle();
  const fileRef = useRef();
  const navigate = useNavigate();

  const onChangeHanler = (e) => {
    setItems({ ...item, [e.target.name]: e.target.value });
  };
  const imageUpload = (event) => {
    // console.log(event.target.files[0]);
    setItems({ ...item, profile: event.target.files[0] });
  };

  const additems = async () => {
    // console.log(item.description);
    const formdata = new FormData();
    formdata.append("myFile", item.profile, item.profile.name);
    formdata.append("name", item.name);
    formdata.append("description", item.description);
    formdata.append("price", item.price);
    // dispatch(Loginn());
    await AddItems(formdata);
    // dispatch(Loginn());
    navigate("/adminhome");
  };
  //   console.log(item);
  return (
    <LayoutAdmin>
      <Container fixed>
        <h1>Add Items</h1>
        <FormGroup className={classes.container}>
          <Typography variant="h4">Add Item</Typography>
          <FormControl>
            <InputLabel>Product image</InputLabel>
            <Input
              onChange={imageUpload}
              type="file"
              //   value={profile}
              name="myFile"
            />
          </FormControl>
          <FormControl>
            <InputLabel>name</InputLabel>
            <Input
              onChange={(e) => onChangeHanler(e)}
              //   value={name}
              name="name"
            />
          </FormControl>
          <FormControl>
            <InputLabel>description</InputLabel>
            <Input
              onChange={(e) => onChangeHanler(e)}
              //   value={name}
              name="description"
            />
          </FormControl>
          <FormControl>
            <InputLabel>price</InputLabel>
            <Input
              onChange={(e) => onChangeHanler(e)}
              //   value={price}
              name="price"
            />
          </FormControl>
          <Button variant="contained" color="primary" onClick={additems}>
            additem
          </Button>
        </FormGroup>
      </Container>
    </LayoutAdmin>
  );
};

export default AdminAddItem;
