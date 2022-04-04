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
import React, { useEffect } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import LayoutAdmin from "./LayoutAdmin";
import { AddItems, edititem, getitem, getitemBYID } from "../services/api";

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

const AdminEditItem = () => {
  const [item, setItems] = useState(initialvalue);
  const { name, description, price, profile } = item;
  const classes = useStyle();
  const fileRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    loadItem();
  }, []);

  const loadItem = async () => {
    const res = await getitemBYID(id);
    setItems(res.data);
    // console.log(res.data);
    // console.log(res.data._id);
  };
  // console.log(item);
  const onChangeHanler = (e) => {
    setItems({ ...item, [e.target.name]: e.target.value });
  };
  const imageUpload = (event) => {
    // console.log(event.target.files[0]);
    setItems({ ...item, profile: event.target.files[0] });
  };

  const editUserDetail = async () => {
    const formdata = new FormData();
    formdata.append("myFile", item.profile, item.profile.name);
    formdata.append("name", item.name);
    formdata.append("description", item.description);
    formdata.append("price", item.price);
    // dispatch(Loginn());

    await edititem(id, formdata);
    // dispatch(Loginn());
    navigate("/adminhome");
  };
  //   console.log(item);
  return (
    <LayoutAdmin>
      <Container fixed>
        <h1>Add Items</h1>
        <FormGroup className={classes.container}>
          <Typography variant="h4">Edit Item</Typography>
          <FormControl>
            <InputLabel>Product image</InputLabel>
            <Input
              onChange={imageUpload}
              type="file"
              // fileRef={profile}
              // value={item.profile}
              name="myFile"
            />
          </FormControl>

          <FormControl>
            <InputLabel>name</InputLabel>
            <Input
              onChange={(e) => onChangeHanler(e)}
              value={item.name}
              name="name"
            />
          </FormControl>
          <FormControl>
            <InputLabel>description</InputLabel>
            <Input
              onChange={(e) => onChangeHanler(e)}
              value={item.description}
              name="description"
            />
          </FormControl>
          <FormControl>
            <InputLabel>price</InputLabel>
            <Input
              onChange={(e) => onChangeHanler(e)}
              value={item.price}
              name="price"
            />
          </FormControl>
          <Button variant="contained" color="primary" onClick={editUserDetail}>
            additem
          </Button>
        </FormGroup>
      </Container>
    </LayoutAdmin>
  );
};

export default AdminEditItem;
