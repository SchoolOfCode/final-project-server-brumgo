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

router.post("/", async(req, res, next)=>{
  try{
    console.log(req.body);
    const locations = new Location(req.body);
    await locations.save();
    res.status(201).json({ payload: {locations} });
  } catch (err){
    console.log(err);
    res.status(500).json({ message: "error creating location", error: err });
  }
});

module.exports = router;
