import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loginn } from "../store/actions";
import { addUser } from "../services/api";
import NavBar from "./NavBar";
import LayoutHome from "./LayoutHome";
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
  name: "",
  username: "",
  password: "",
  email: "",
  phone: "",
};
const Signup = () => {
  const classes = useStyle();
  const [user, setUser] = useState(initialvalue);
  const { name, username, password, email, phone } = user;
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHanler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetail = async () => {
    // dispatch(Loginn());
    await addUser(user);
    // dispatch(Loginn());
    navigate("/login");
  };

  return (
    <LayoutHome>
      <Container fixed>
        <FormGroup className={classes.container}>
          <Typography variant="h4">Signup</Typography>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input
              onChange={(e) => onChangeHanler(e)}
              value={name}
              name="name"
            />
          </FormControl>
          <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input
              onChange={(e) => onChangeHanler(e)}
              value={username}
              name="username"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Password</InputLabel>
            <Input
              onChange={(e) => onChangeHanler(e)}
              name="password"
              value={password}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input
              onChange={(e) => onChangeHanler(e)}
              name="email"
              value={email}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input
              onChange={(e) => onChangeHanler(e)}
              name="phone"
              value={phone}
            />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addUserDetail()}
          >
            signup
          </Button>
        </FormGroup>
      </Container>
    </LayoutHome>
  );
};

export default Signup;
