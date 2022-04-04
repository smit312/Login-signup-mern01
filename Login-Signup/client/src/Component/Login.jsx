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
import { loginUser } from "../services/api";
import { Loginn } from "../store/actions";
import LayoutHome from "./LayoutHome";
import NavBar from "./NavBar";
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
  email: "",
  password: "",
};
const Login = () => {
  const [user, setUser] = useState(initialdata);
  const { email, password } = user;
  const classes = useStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHanler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onsubmitHandler = async () => {
    // console.log("clicked");
    // dispatch(Loginn());
    try {
      const res = await loginUser(user);
      dispatch(Loginn());
      if (res.data.status) localStorage.setItem("id", res.data.data._id);
      navigate("/landing");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LayoutHome>
      <Container fixed>
        <FormGroup className={classes.container}>
          <Typography variant="h4">Login</Typography>
          <FormControl>
            <InputLabel>email</InputLabel>
            <Input
              onChange={(e) => onChangeHanler(e)}
              value={email}
              name="email"
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
    </LayoutHome>
  );
};

export default Login;
