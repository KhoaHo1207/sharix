const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const ConnectDB = require("./db/connectDB");
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

ConnectDB();

app.get("/", (req, res) => {
  return res.send("Server is running on");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
