const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -email");
    res.status(200).send({ data: users });
  } catch (error) {
    return res.status(500).send({ error: "Server Error" });
  }
};
