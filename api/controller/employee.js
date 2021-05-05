
const { validationResult } = require('express-validator');
const { nanoid } = require("nanoid");
const idLength = 8;

exports.add = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({
            message: "Faild to post employee",
            errors: errors
        });
    }
    const employee = {
        id: nanoid(idLength),
        ...req.body,
    }
    req.app.db.get("employees").push(employee).write();

    //Add in Database
    return res.status(200).json({
        message: "Successfully Added",
        employee: employee,
    });

}


exports.update = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({
            message: "Faild to update employee",
            errors: errors
        });
    }
    console.log(errors);
    // Update 
    req.app.db
        .get("employees")
        .find({ id: req.params.id })
        .assign(req.body)
        .write();

    return res.status(200).json({
        message: "Successfully Updated",
        errors: errors,
    });
}

exports.get = (req, res, next) => {
    //get from Database
    const objects = req.app.db.get("employees");
    var employees = objects.map(emp => {
        return {
            name: `${emp.firstName} ${emp.lastName}`,
            dob: `${emp.dob}`,
            gender: `${emp.gender}`,
            salary: `${emp.salary}`,
            status: `${emp.status}`
        }
    });
    return res.status(200).json({
        employees: employees,
    });
}