const router = require("express").Router();
const Marjor = require("../models/Major");

router.post("/", async (req, res) => {
  try {
    const newMajor = new Marjor({
      nameMajor: req.body.nameMajor,
    });

    const major = await newMajor.save();
    res.status(200).json(major);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const cats = await Marjor.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
