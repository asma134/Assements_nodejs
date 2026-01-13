
const API = "/api/students";
let editId = null;

function loadStudents() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#studentsTable tbody");
      tbody.innerHTML = "";
      data.forEach(s => {
        tbody.innerHTML += `
          <tr>
            <td>${s.name}</td>
            <td>${s.email}</td>
            <td>${s.age}</td>
            <td>${s.address}</td>
            <td>
              <button onclick="editStudent(${s.id}, '${s.name}', '${s.email}', ${s.age}, '${s.address}')">Edit</button>
              <button onclick="deleteStudent(${s.id})">Delete</button>
            </td>
          </tr>
        `;
      });
    });
}

document.getElementById("studentForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const address = document.getElementById("address").value;

  const data = { name, email, age, address };

  if (editId) {
    
    fetch(API + "/" + editId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      editId = null;
      loadStudents();
      e.target.reset();
    });
  } else {
    
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      loadStudents();
      e.target.reset();
    });
  }
});

function editStudent(id, name, email, age, address) {
  editId = id;
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("age").value = age;
  document.getElementById("address").value = address;
}

function deleteStudent(id) {
  fetch(API + "/" + id, { method: "DELETE" })
    .then(() => loadStudents());
}

loadStudents();
