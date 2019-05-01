var express = require("express");
var router = express.Router();
var Location = require("../models/location");

router.get("/", async function(req, res, next) {
  try {
    const locations = await Location.find();
    res.json({ payload: locations });
  } catch (err) {
    next({ err, message: "something is not right!!" });
  }
});

module.exports = router;
