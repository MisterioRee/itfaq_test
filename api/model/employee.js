class Employee {
    constructor(id, firstName, lastName, dob, gender, salary, createdDate, status) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.gender = gender;
        this.salary = salary;
        this.createdDate = createdDate;
        this.status = status;
    }

    sanitize(employee) {
        employeeSanitizer = [
            check('firstName', 'FirstName Must Be String').trim().escape(),
            check('lastName', 'FirstName Must Be String').trim().escape(),
        ]
    }
}

exports = Employee;