import express from "express";
import multer from "multer";

import {
  addAdmin,
  additem,
  AdminLogin,
  deleteitem,
  editItem,
  getitem,
  getitemBYID,
} from "../controller/Admin-controller.js";
import {
  addUser,
  getUser,
  getUsers,
  userLogin,
} from "../controller/user-controller.js";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
    // cb(null, __dirname);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
var upload = multer({ storage: storage });
const route = express.Router();
route.get("/", getUsers);
route.post("/add", addUser);
route.post("/addadmin", addAdmin);
route.post("/admin", AdminLogin);
route.post("/login", userLogin);
route.get("/getuser/:id", getUser);
route.post("/additem", upload.single("myFile"), additem);
//
route.get("/getitems", getitem);
route.get("/getitems/:id", getitemBYID);

route.put("/getitems/:id", upload.single("myFile"), editItem);
route.delete("/:id", deleteitem);
export default route;
