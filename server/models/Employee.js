const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {type: String},
    age: {type: Number},
    bio: {type: String},
    image: {type: String},
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;