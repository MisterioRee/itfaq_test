const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const Employee = require('../controller/employee');

/**
 * Sanitize and validate using express-validator
 * Rules based on input and request
 */
let rules = [
    check('firstName', 'FirstName Must Be non-empty String').notEmpty().trim().escape(),
    check('lastName').escape(),
    check('dob').toDate(),
    check('gender').toBoolean(),
    check('salary').toFloat(),
    check('createDate').toDate(),
    check('status').toBoolean(),
];


router.post('/', rules, Employee.add);
router.put('/:id', rules, Employee.update);
router.get('/', Employee.get);

module.exports = router;