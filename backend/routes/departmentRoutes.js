const express = require("express");
const Department = require("../models/Department");
const router = express.Router();

router.post("/", async (req, res) => {
  const dept = new Department(req.body);
  await dept.save();
  res.json(dept);
});

router.get("/", async (req, res) => {
  res.json(await Department.find());
});

module.exports = router;
