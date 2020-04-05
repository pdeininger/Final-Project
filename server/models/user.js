const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
