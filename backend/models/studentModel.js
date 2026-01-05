
const db = require("../config/db");

exports.create = (data, cb) => {
  db.query(
    "INSERT INTO students (name, email, age, address) VALUES (?,?,?,?)",
    [data.name, data.email, data.age, data.address],
    cb
  );
};


exports.findAll = cb => {
  db.query("SELECT * FROM students", cb);
};

exports.update = (id, data, cb) => {
  db.query(
    "UPDATE students SET name=?, email=?, age=?, address=? WHERE id=?",
    [data.name, data.email, data.age, data.address, id],
    cb
  );
};

exports.remove = (id, cb) => {
  db.query("DELETE FROM students WHERE id=?", [id], cb);
};
