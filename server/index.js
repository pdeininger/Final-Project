//dependencies
const express = require("express");
const mongoose = require("mongoose");
const serverRoutes = require("./routes/api");
const router = require("express").Router();

/*creating an instance of express*/
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connecting to mongodb
mongoose.connect("mongodb://localhost/mentor", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(serverRoutes);
app.use("/api", router);

//launch server & listening
app.listen(PORT, function () {
  console.log("app is loaded:  on local host:" + PORT);
});
