import express from "express";
import mongoose from "mongoose";
import route from "./route/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use("/public", express.static("public")); //setting path for display image in browser like : http://localhost:8000/public/images/1645007366233_img.png
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", route);
const PORT = 8000;
const URL =
  "mongodb+srv://user:user@login-signup.d0a4l.mongodb.net/LOGIN-SIGNUP?retryWrites=true&w=majority";
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port no ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
