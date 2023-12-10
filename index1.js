const apiUrl = 'http://localhost:3000/api/employees';

        function addEmployee() {
            const name = document.getElementById('addName').value;
            const position = document.getElementById('addPosition').value;
            const department = document.getElementById('addDepartment').value;

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, position, department }),
            })
                .then(response => response.json())
                .then(newEmployee => {
                    console.log('Employee added successfully:', newEmployee);
                    // You can perform additional actions here if needed
                })
                .catch(error => console.error('Error adding employee:', error));
        }

        function updateEmployee() {
            const id = document.getElementById('updateId').value;
            const name = document.getElementById('updateName').value;
            const position = document.getElementById('updatePosition').value;
            const department = document.getElementById('updateDepartment').value;

            fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, position, department }),
            })
                .then(response => response.json())
                .then(updatedEmployee => {
                    console.log('Employee updated successfully:', updatedEmployee);
                    // You can perform additional actions here if needed
                })
                .catch(error => console.error('Error updating employee:', error));
        }

        function deleteEmployee() {
            const id = document.getElementById('deleteId').value;

            fetch(`${apiUrl}/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(updatedEmployees => {
                    console.log('Employee deleted successfully');
                    // You can perform additional actions here if needed
                })
                .catch(error => console.error('Error deleting employee:', error));
        }

        function getEmployee() {
            const id = document.getElementById('getEmployeeId').value;

            fetch(`${apiUrl}/${id}`)
                .then(response => response.json())
                .then(employee => {
                    const employeeDetails = document.getElementById('employeeDetails');
                    employeeDetails.innerHTML = `
                        <p>Employee ID: ${employee.id}</p>
                        <p>Name: ${employee.name}</p>
                        <p>Position: ${employee.position}</p>
                        <p>Department: ${employee.department}</p>
                    `;
                })
                .catch(error => console.error('Error getting employee:', error));
        }