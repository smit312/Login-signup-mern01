import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const itemSchema = mongoose.Schema({
  profile: String,
  name: String,
  description: String,
  price: String,
});

autoIncrement.initialize(mongoose.connection);
itemSchema.plugin(autoIncrement.plugin, "items");
const items = mongoose.model("items", itemSchema);
export default items;
