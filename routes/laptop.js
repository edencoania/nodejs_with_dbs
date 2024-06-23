var express = require('express');
var router = express.Router();
const { addLaptop, getAllLaptops } = require('./../sql-db/sqlLaptopOperations'); // Import MySQL functions

router.get('/store', async function(req, res, next) {
  let laptops;
  try {
    const newLaptop = {
      model: "ModelX",
      speed: 3.4,
      ram: 16,
      hd: 512,
      price: 1200.99,
      screen: 15.6
    }; // Example laptop data
    await addLaptop(newLaptop);
    laptops = await getAllLaptops();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
    return;
  }
  res.send(laptops);
});

router.get('/get', async function(req, res, next) {
  try {
    const laptops = await getAllLaptops();
    res.status(200).send(laptops);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;