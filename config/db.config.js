const mysql = require('mysql');

//create here mysql connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_express'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfuly!!!');
});

module.exports = dbConn;
