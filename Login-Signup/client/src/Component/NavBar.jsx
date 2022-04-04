import React from "react";
import { AppBar, Toolbar, makeStyles, Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../store/actions";
const useStyle = makeStyles({
  login: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginLeft: "85%",
  },
  logout: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginLeft: "85%",
  },
  signup: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginLeft: "3%",
  },
  home: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: 20,
  },
  header: {
    background: "#111111",
  },
});
const NavBar = () => {
  const classes = useStyle();
  const isLogin = useSelector((state) => state.LoginOut.isLogin);
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(Logout());
    localStorage.removeItem("id");
  };

  return (
    <Container fixed>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <NavLink to="/" className={classes.home}>
            Home
          </NavLink>
          {!isLogin ? (
            <>
              <NavLink to="/login" className={classes.login}>
                Login
              </NavLink>
              <NavLink to="/signup" className={classes.signup}>
                Signup
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/signup"
                className={classes.logout}
                to="/"
                onClick={() => LogoutHandler()}
              >
                Logout
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
