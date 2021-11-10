const express = require(`express`);

//create express app
const app = express();

//setup de server port
const port = process.env.port || 5000;

//define root route
app.get(`/`, (req, res) => {
	res.send(`Hello word!`);
});

//import employee routes
const employeeRoutes = require(`./src/routes/employee.route`);

//create employeeroutes
app.use(`/api/v1/employee`, employeeRoutes);

//listen to the port
app.listen(port, () => {
	console.log(`Express Server is running at port ${port}`);
});
