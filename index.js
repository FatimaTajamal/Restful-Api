const express = require("express");
const app = express();
app.use(express.json());

const employees = {
    1: {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      department: "Engineering",
    },
    2: {
      id: 2,
      name: "Jane Smith",
      position: "Data Analyst",
      department: "Analytics",
    },
    3: {
      id: 3,
      name: "Mike Johnson",
      position: "UX Designer",
      department: "Design",
    },
    4: {
      id: 4,
      name: "Emily Davis",
      position: "Marketing Specialist",
      department: "Marketing",
    },
    5: {
      id: 5,
      name: "Alex Turner",
      position: "Network Administrator",
      department: "IT",
    },
    6: {
      id: 6,
      name: "Sara White",
      position: "Financial Analyst",
      department: "Finance",
    },
    7: {
      id: 7,
      name: "Daniel Brown",
      position: "HR Manager",
      department: "Human Resources",
    }
  };
  

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/search", function (req, res) {
  res.send("API Search");
});

app.get("/api/employees", function (req, res) {
  res.send(Object.values(employees));
});

app.get("/api/employees/:id", function (req, res) {
  const employee = employees[req.params.id];
  if (!employee) return res.status(400).send("Employee not found");
  res.send(employee);
});

app.put("/api/employees/:id", function (req, res) {
  const employee = employees[req.params.id];
  if (!employee) return res.status(400).send("Employee not found");

  // Update employee data
  employee.name = req.body.name;
  employee.position = req.body.position;
  employee.department = req.body.department;

  res.send(employee);
});

app.delete("/api/employees/:id", function (req, res) {
  if (!employees[req.params.id]) return res.status(400).send("Employee not found");
  delete employees[req.params.id];
  res.send(Object.values(employees));
});

app.post("/api/employees", function (req, res) {
  // Generate a unique ID for the new employee
  const newEmployeeId = Object.keys(employees).length + 1;

  // Create a new employee object
  const newEmployee = {
    id: newEmployeeId,
    name: req.body.name,
    position: req.body.position,
    department: req.body.department,
  };

  // Add the new employee to the employees object
  employees[newEmployeeId] = newEmployee;

  res.send(newEmployee);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});