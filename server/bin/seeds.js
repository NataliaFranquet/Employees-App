const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const mongoose = require("mongoose");
const request = require("request-promise");
const Employee = require("../models/Employee");

mongoose
  .connect(process.env.LOCAL_MONGO, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

Employee.deleteMany()
  .then(() => {
    request({
      url: process.env.URL,
      headers: {
        'Authorization': process.env.PASSWORD
      },
      qs: {
        'page': process.env.PAGE,
        'page_size': process.env.PAGE_SIZE
      }
    })
      .then(allData => {
        data = JSON.parse(allData)
        data.forEach(employee => {
          let { name, age, image, bio } = employee;
          console.log(employee.image)
            mediasmartEmployee = new Employee({ name, age, image, bio })
              .save()
              .then(() => {
                console.log("Employee inserted")
                mongoose.disconnect()
              })
              .catch(err => {
                mongoose.disconnect()
                throw err
              });
        });
      })
      .catch(err => console.log(err));
  });