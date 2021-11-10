const EmployeeModel = require(`../models/employee.model`);

//get all employee list

exports.getEmployeeList = (req, res) => {
	EmployeeModel.getAllEmployee();
};