const router = require("express").Router();
const db = require("../models");

router.post("/users", (req, res) => {
  db.Users.create({ req })
    .then((newUser) => {
      console.log(newUser);
      res.json(newUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
