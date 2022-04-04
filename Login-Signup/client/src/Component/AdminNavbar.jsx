import React from "react";
import { AppBar, Toolbar, makeStyles, Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  home: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: 20,
  },
  logout: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginLeft: "5%",
  },
  users: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginLeft: "5%",
  },
  get: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginLeft: "5%",
  },
  add: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginLeft: "60%",
  },
});
const AdminNavbar = () => {
  const classes = useStyle();
  const LogoutHandler = () => {
    localStorage.removeItem("aid");
  };

  return (
    <Container fixed>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <NavLink to="/adminhome" className={classes.home}>
            Home
          </NavLink>
          <NavLink to="/additems" className={classes.add}>
            AddItems
          </NavLink>
          <NavLink to="/getitem" className={classes.get}>
            AllItems
          </NavLink>
          <NavLink to="/allusers" className={classes.users}>
            All Users
          </NavLink>
          <NavLink
            to="/"
            onClick={() => LogoutHandler()}
            className={classes.logout}
          >
            Logout
          </NavLink>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default AdminNavbar;
