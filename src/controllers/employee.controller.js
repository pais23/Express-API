const EmployeeModel = require('../models/employee.model');

//get all employee list
exports.getEmployeeList = (req, res) => {
    // console.log('Here all employees list');
    EmployeeModel.getAllEmployees((err, employees) => {
        if(err)
        res.send(err);
        console.log('Employees', employees);
        res.send(employees);
    })
}

//get employee by id
exports.getEmployeeByID = (req, res) => {
    // console.log('Get emp by id');
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
        if(err)
        res.send(err);
        console.log('Single employee data', employee);
        res.send(employee);
    })
}

//create new employee
exports.createNewEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('Employee Req Data', employeeReqData);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else
    {
        EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee Created Susscess', data: employee.insertId});    
        })
    }
}

//update employee
exports.updateEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('Employee Request Data Update', employeeReqData);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else
    {
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee Updated Susscess'});    
        })
    }
}

//delete employee
exports.deleteEmployee = (req, res) => {
    EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
        if(err)
        res.send(err);
        res.json({success: true, message: 'Employee Deleted Successfully!'});
    })
}