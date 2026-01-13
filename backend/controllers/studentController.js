const Student = require("../models/studentModel");

exports.createStudent = (req, res) => {
  Student.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student Registered" });
  });
};

exports.getStudents = (req, res) => {
  Student.findAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.updateStudent = (req, res) => {
  Student.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student Updated" });
  });
};

exports.deleteStudent = (req, res) => {
  Student.remove(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student Deleted" });
  });
};