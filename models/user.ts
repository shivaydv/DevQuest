import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  username: { type: String, required: true, unique: true },
  github: { type: String },
  role: { type: String, enum: ["admin", "user"], default: "user" },

},{ timestamps: true } );

let User;

try {
  User = mongoose.model("User");
} catch (error) {
  User = mongoose.model("User", UserSchema);
}
// const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
