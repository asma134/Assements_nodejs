const express = require("express");
const Registration = require("../models/Registration");
const router = express.Router();

router.post("/", async (req, res) => {
  const reg = new Registration(req.body);
  await reg.save();
  res.json(reg);
});

router.get("/", async (req, res) => {
  res.json(await Registration.find().populate("student course"));
});

module.exports = router;
