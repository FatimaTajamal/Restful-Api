const EmployeeModel= require("./models/EmployeeModel");

const createEmployee=async(id,name,position,department)=>{
    console.log("Create new Employee")
    let Employee= new EmployeeModel();
    Employee.id=id;
    Employee.name=name;
    Employee.position=position;
    Employee.department=department;

    await Employee.save();
    return Employee
}

const updateEmployee = async (_id, name, position, department) => {
    console.log("Update Employee");
    let Employee = await EmployeeModel.findById(_id);
    Employee.name = name;
    Employee.position = position;
    Employee.department = department;

    await Employee.save();
    return Employee;
};

const getAllEmployees= async ()=>{
    let employees= await EmployeeModel.find();
    return employees;

}

const deleteEmployee= async (_id)=>{
    let employees= await EmployeeModel.findByIdAndDelete(_id);
    return employees;

}

module.exports.createEmployee=createEmployee;
module.exports.getAllEmployees=getAllEmployees;
module.exports.deleteEmployee=deleteEmployee;
module.exports.updateEmployee=updateEmployee;