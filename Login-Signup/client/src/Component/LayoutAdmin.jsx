import React from "react";
import AdminNavbar from "./AdminNavbar";
const LayoutAdmin = (props) => {
  return (
    <>
      <AdminNavbar />

      {props.children}
    </>
  );
};

export default LayoutAdmin;
