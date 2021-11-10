const mysql = require(`mysql`);

//create mysql connection 
const dbConn = mysql.createConnection({
	host: `localhost:8080`,
	user: `root`,
	password: ``,
	database: `teste`
});

//conectando no banco
dbConn.connect(function (error) {
	if (error) throw error;
	console.log(`Data base connect success `);
});

module.exports = dbConn;