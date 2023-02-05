const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, min: 6, max: 64 },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  city: { type: String },
  country: { type: String },
  about: { type: String },
  admin: { type: Boolean, default: false },
  location: { type: String },
  image: { type: String },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  likes: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  visitors: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

mongoose.model("User", userSchema);
