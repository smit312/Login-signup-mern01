import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import autoIncrement from "mongoose-auto-increment";
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  phone: Number,
});
//hashing the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 12);
  }
  next();
});
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "user");
const user = mongoose.model("user", userSchema);
export default user;
