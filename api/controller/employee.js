/**
 * Author: Muhammad Rehan
 * email: mrmuhammadrehan65@gmail.com
 * 
 * This code is subjected to an exam test, you might want to
 * copy this code and modify as your own need, you are free to 
 * use this code as your own.
 */
const { validationResult } = require('express-validator');
const { nanoid } = require("nanoid");
const idLength = 8;

//add new employee to temporary json database
exports.add = (req, res, next) => {
    //express validator error(s)
    const errors = validationResult(req);
    //if validator has error(s)
    if (!errors.isEmpty()) {
        //return errors list to client
        return res.status(401).json({
            message: "Faild to post employee",
            errors: errors
        });
    }
    // create emplyee object with random id
    const employee = {
        id: nanoid(idLength),
        ...req.body,
    }
    //insert object into database
    req.app.db.get("employees").push(employee).write();

    //response to client
    return res.status(200).json({
        message: "Successfully Added",
        employee: employee,
    });

}

//update current employee in database
exports.update = (req, res, next) => {
    //express validator error(s)
    const errors = validationResult(req);
    //if validator has error(s)
    if (!errors.isEmpty()) {
        //return errors list to client
        return res.status(401).json({
            message: "Faild to update employee",
            errors: errors
        });
    }
    // Update in database 
    var updatedEmployee = req.app.db
        .get("employees")
        .find({ id: req.params.id })
        .assign(req.body)
        .write();

    //response to client
    return res.status(200).json({
        message: "Successfully Updated",
        updatedEmployee: updatedEmployee,
    });
}

// get list of employees from database
exports.get = (req, res, next) => {
    //read from Database
    const objects = req.app.db.get("employees");
    // concatenate full name
    var employees = objects.map(emp => {
        return {
            name: `${emp.firstName} ${emp.lastName}`,
            dob: `${emp.dob}`,
            gender: `${emp.gender}`,
            salary: `${emp.salary}`,
            status: `${emp.status}`
        }
    });
    //response to client
    return res.status(200).json({
        employees: employees,
    });
}