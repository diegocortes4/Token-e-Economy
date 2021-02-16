console.log("top");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log("first");
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Token-e-Economy",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});
console.log("second");
connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});
const authentication = require("./routes/authControllers");
const tasksController = require("./routes/tasksController");
// const ProductsController = require("./controllers/productsController");

app.use(express.static("client/build"));

app.get("/api/config", (req, res) => {
  res.json({ success: true });
});
// app.use("/api/auth", authentication);
app.use("/api/auth", authentication);
app.use('/api/tasks', tasksController)
// app.use("/api/products", ProductsController);
//api routes
app.use(require("./routes/api/api-routes"));
console.log("third");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
