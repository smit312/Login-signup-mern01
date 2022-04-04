import React from "react";
import NavBar from "./NavBar";

const LayoutHome = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default LayoutHome;
