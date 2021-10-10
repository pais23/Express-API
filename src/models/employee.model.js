var dbConn = require('../../config/db.config');

var Employee = function(employee){
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.update_at = new Date();
}

//get all employees
Employee.getAllEmployees = (result) => {
    dbConn.query('SELECT * FROM employees', (err, res) => {
        if(err)
        {
            console.log('Error while fetching employees', err);
            result(null, err);
        }
        else
        {
            console.log('Employees fetching successfuly');
            result(null, res);
        }
    })
}

//get employees by ID
Employee.getEmployeeByID = (id, result) => {
    dbConn.query('SELECT * FROM employees WHERE id=?', id, (err, res) => {
        if(err)
        {
            console.log('Error while fetching employee by ID', err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}

//create new employee
Employee.createEmployee = (employeeReqData, result) => {
    dbConn.query('INSERT INTO employees SET ? ', employeeReqData, (err, res) => {
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Employee created successfuly');
            result(null, res);
        }
    });
}

//create update employee
Employee.updateEmployee = (id, employeeReqData, result) => {
    dbConn.query(`UPDATE employees SET first_name=?, last_name=?, email=?, phone=?, organization=?, designation=?, salary=? WHERE id=${id}`, 
    [employeeReqData.first_name, employeeReqData.last_name, employeeReqData.email, employeeReqData.phone, employeeReqData.organization, 
    employeeReqData.designation, employeeReqData.salary], (err, res) => {
        if(err)
        {
            console.log('Error while updating the employee data');
            result(err, null);
        }
        else{
            console.log('Employee Updated Successfully');
            result(null, res);
        }
    })

}

//create delete employee
Employee.deleteEmployee = (id, result) => {
    dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res) => {
        if(err)
        {
            console.log('Error while deleting thie employe data');
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}

module.exports = Employee;