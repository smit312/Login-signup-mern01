import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUsers } from "../services/api";
import { Container } from "@material-ui/core";
import NavBar from "./NavBar";
import LayoutHome from "./LayoutHome";

const LandingPage = () => {
  const [users, setuser] = useState([]);
  const isLogin = useSelector((state) => state.LoginOut.isLogin);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let id = localStorage.getItem("id");
    const res = await getUsers(id);
    setuser(res.data);
  };
  return (
    <LayoutHome>
      <center>
        {!isLogin && <Navigate to="/login" />}
        <Container>
          <h1> Hello welcome back</h1>
          <h2>id : {users._id}</h2>
          <h2>name : {users.name}</h2>
          <h2>email : {users.email}</h2>
          <h2>username : {users.username}</h2>
          <h2>phone : {users.phone}</h2>
        </Container>
      </center>
    </LayoutHome>
  );
};

export default LandingPage;
