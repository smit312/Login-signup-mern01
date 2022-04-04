import User from "../model/user-schema.js";
import bcryptjs from "bcryptjs";
export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getUsers = async (req, res) => {
  //   res.send("hiii");
  try {
    let user = await User.find();
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const userLogin = async (req, res) => {
  //   console.log(req.body);
  //   res.json({ message: "smit" });

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "please fill the data properly" });
    }

    const userr = await User.findOne({ email: email });

    if (userr) {
      const isMatch = await bcryptjs.compare(password, userr.password);

      if (!isMatch) {
        res.status(400).json({ error: "user error" });
      } else {
        res.status(200).json({
          message: "user signin sucessfully",
          status: true,
          data: userr,
        });
      }
    } else {
      res.status(400).json({ error: "user error" });
    }
  } catch (err) {
    console.log(err);
  }
};
export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};
