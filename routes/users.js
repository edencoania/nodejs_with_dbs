var express = require('express');
var router = express.Router();
const USER = require("./../models/user");
const { addStudent, getAllStudents } = require('./../mongo/database'); // Import functions



router.get('/store',async function(req, res, next) {
  let aa;
  try {
    // Call database functions here
    const newStudent = { name: "John Doe", email: "johnaaaaaaadoe@example.com", age: 25 }; // Example student data
    await addStudent(newStudent);
    aa = await getAllStudents();
  } catch (error) {
    console.error("Error:", error);
  }
  //const user = await USER.create(req.body);
  res.send(aa);
  });

router.get('/get',async function(req, res, next) 
{
  const users = await USER.find({});
  res.send(users);
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
