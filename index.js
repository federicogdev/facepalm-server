require("./src/models/User.js");
require("./src/models/Post.js");
require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const http = require("http").createServer(app);

app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Connection Error", err));

app.use("/api/v1/auth", require("./src/routes/auth"));
app.use("/api/v1/posts", require("./src/routes/posts"));
app.use("/api/v1/users", require("./src/routes/users"));
app.use("/api/v1/admin", require("./src/routes/admin"));

app.get("/ping", (req, res) => {
  return res.status(200).send("Ping");
});

http.listen(PORT, () => console.log(`Listening on port ${PORT}`));
