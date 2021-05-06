/**
 * Author: Muhammad Rehan
 * email: mrmuhammadrehan65@gmail.com
 * 
 * This code is subjected to an exam test, you might want to
 * copy this code and modify as your own need, you are free to 
 * use this code as your own.
 */
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


/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: The Employee managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     FetchEmployee:
 *      type: object
 *      properties:
  *         id:
 *           type: string
 *           description: The auto-generated id of the employee 
 *         name:
 *           type: string
 *           description: Name of the employee
 *         dob:
 *           type: DateTime
 *           description: Date of birth the employee
 *         gender:
 *           type: boolean
 *           description: Gender of the employee
 *         salary:
 *           type: decimal
 *           description: Salary of the employee
 *         createdDate:
 *           type: DateTime
 *           description: Created Date of the employee
 *         status:
 *           type: boolean
 *           description: status of the employee
 *     Employee:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - dob
 *         - gender
 *         - salary
 *         - createdDate
 *         - status
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the employee
 *         firstname:
 *           type: string
 *           description: First Name of the employee
 *         lastname:
 *           type: string
 *           description: Last Name of the employee
 *         dob:
 *           type: DateTime
 *           description: Date of birth the employee
 *         gender:
 *           type: boolean
 *           description: Gender of the employee
 *         salary:
 *           type: decimal
 *           description: Salary of the employee
 *         createdDate:
 *           type: DateTime
 *           description: Created Date of the employee
 *         status:
 *           type: boolean
 *           description: status of the employee
 *       example:
 *         firstName: Ali
 *         lastName: Shah
 *         dob: 2000-05-05
 *         gender: true
 *         salary: 99999
 *         status: true
 */


/**
 * @swagger
 * /api/employee:
 *   post:
 *     summary: Create a new Employee
 *     tags: [Employee]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: The Employee was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Some server error
 * 
 */
router.post('/', rules, Employee.add);



/**
 * @swagger
 * /api/employee/{id}:
 *  put:
 *    summary: Update the book by the id
 *    tags: [Employee]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The employee id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Employee'
 *    responses:
 *      200:
 *        description: The Employee was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Employee'
 *      404:
 *        description: The Employee was not found
 *      500:
 *        description: Some error happened
 */
router.put('/:id', rules, Employee.update);


/**
 * @swagger
 * /api/employee:
 *   get:
 *     summary: Returns the list of all the Employee
 *     tags: [Employee]
 *     responses:
 *       200:
 *         description: The list of the Employee
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FetchEmployee'
 */

router.get('/', Employee.get);

module.exports = router;