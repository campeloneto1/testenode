//import express
const express = require(`express`);
//import router from express
const route = express.Router();

//import the controller
const EmployeeController = require(`../controllers/employee.controller`);

//get all employee list
route.get(`/`, EmployeeController.getEmployeeList);

module.exports = route;