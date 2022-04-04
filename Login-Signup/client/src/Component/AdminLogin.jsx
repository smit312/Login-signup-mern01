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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Adminlogin } from "../services/api";

import LayoutAdmin from "./LayoutAdmin";

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& >*": {
      marginTop: 20,
    },
  },
});

const initialdata = {
  username: "",
  password: "",
};
const AdminLogin = () => {
  const [admin, setAdmin] = useState(initialdata);
  const { username, password } = admin;
  const classes = useStyle();
  const navigate = useNavigate();

  const onChangeHanler = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const onsubmitHandler = async () => {
    // console.log("clicked");
    // dispatch(Loginn());
    try {
      const res = await Adminlogin(admin);
      if (res.data.status) localStorage.setItem("aid", res.data.data._id);
      navigate("/adminhome");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutAdmin>
      <Container fixed>
        <FormGroup className={classes.container}>
          <Typography variant="h4">Admin Login</Typography>
          <FormControl>
            <InputLabel>username</InputLabel>
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
              value={password}
              name="password"
            />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onsubmitHandler()}
          >
            Login
          </Button>
        </FormGroup>
      </Container>
    </LayoutAdmin>
  );
};

export default AdminLogin;
