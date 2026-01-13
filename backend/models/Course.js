const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: String,
  department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" }
});

module.exports = mongoose.model("Course", CourseSchema);
