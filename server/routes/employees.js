const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', (req, res, next) => {
  Employee
    .find({ 'image': /^https/ })
    .then(allEmployees => res.json(allEmployees))
    .catch(err => res.json(err));
});

router.get('/:id', (req, res, next) => {
  let employeeID = req.params.id;
  Employee
    .findById(employeeID)
    .then(employeeData => res.json(employeeData))
    .catch(err => console.log(err))
})

module.exports = router;
