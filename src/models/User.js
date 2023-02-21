const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
  image: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
  },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  likes: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  visitors: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

//before saving user to DB
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

//comparison between input password and DB password
userSchema.methods.comparePassword = function (_password) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(_password, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }

      if (!isMatch) {
        return reject(false);
      }

      resolve(true);
    });
  });
};

mongoose.model("User", userSchema);
