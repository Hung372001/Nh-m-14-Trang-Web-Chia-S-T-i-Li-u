const router = require("express").Router();
const Subject = require("../models/subject");

router.post("/", async (req, res) => {
  try {
    const newSubject = new Subject({
      nameSubject: req.body.nameSubject,
      marjor: req.body.marjor,
    });

    const subject = await newSubject.save();
    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const cats = await Subject.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
