const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const { createEmployee, getAllEmployees, deleteEmployee, updateEmployee } = require('./employeeOperations');

mongoose
  .connect('mongodb://localhost:27017/Staff')
  .then(async () => {
    console.log('Connected to Mongoose');

    let Employee = await createEmployee(2, 'Jane Smith ', 'Data Analyst', 'Analytics');
    console.log(Employee);

    let allEmployees = await getAllEmployees();
    console.log(allEmployees);

   console.log(await deleteEmployee('656f4c7101a127670ff7879b'));

    let updatedEmployee = await updateEmployee("656f4c7101a127670ff7879b", "Mike Johnson", "UX Designer", "Design");
    console.log(updatedEmployee);
  })
  .catch((err) => {
    console.log('Error detected');
    console.log(err);
  });

app.listen(3000);
