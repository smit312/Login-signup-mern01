import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import autoIncrement from "mongoose-auto-increment";
const adminSchema = mongoose.Schema({
  username: String,
  password: String,
});
adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 12);
  }
  next();
});
autoIncrement.initialize(mongoose.connection);
adminSchema.plugin(autoIncrement.plugin, "admin");
const admin = mongoose.model("admin", adminSchema);
export default admin;
