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

http.listen(PORT, () => console.log(`Listening on port ${PORT}`));
