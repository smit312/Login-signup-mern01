import Admin from "../model/Admin-schema.js";
import Items from "../model/Item-schema.js";
import bcryptjs from "bcryptjs";
export const addAdmin = async (req, res) => {
  const admin = req.body;
  const newAdmin = new Admin(admin);
  try {
    await newAdmin.save();
    res.json(newAdmin);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const AdminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "please fill the data properly" });
    }
    const adminn = await Admin.findOne({ username: username });
    if (adminn) {
      const isMatch = await bcryptjs.compare(password, adminn.password);
      if (!isMatch) {
        return res.json(400).json({ error: "user error" });
      } else {
        res.status(200).json({
          message: "admin signin sucessfuly",
          status: true,
          data: adminn,
        });
      }
    } else {
      res.status(400).json({ message: "user error" });
    }
  } catch (error) {
    console.log("something else happen");
  }
};
export const additem = async (req, res) => {
  let profile = req.file ? req.file.filename : null;
  // let profile = req.file ? req.file.path : null;
  // var profilePic= req.file.path;

  // const item = req.body;
  const { name, description, price } = req.body;
  const newItem = new Items({ profile, name, description, price });
  try {
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getitem = async (req, res) => {
  try {
    let iteam = await Items.find();
    res.json(iteam);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getitemBYID = async (req, res) => {
  const id = req.params.id;
  try {
    const item = await Items.findById(id);
    res.json(item);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const editItem = async (req, res) => {
  let profile = req.file ? req.file.filename : null;
  // const item = req.body;
  const { name, description, price } = req.body;
  // console.log(req.body);
  const editItem = new Items({ profile, name, description, price });
  // const editItem = new Items(item);
  // console.log(req.params.id);
  try {
    await Items.updateOne({ _id: req.params.id }, editItem);
    res.json(editItem);
    // console.log(editItem);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteitem = async (req, res) => {
  try {
    await Items.deleteOne({ _id: req.params.id });
    res.json("item deleted sucessfully");
  } catch (error) {
    res.json({ message: error.message });
  }
};
