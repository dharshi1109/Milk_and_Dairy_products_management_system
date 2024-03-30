const express = require("express");
const userController = require("../controllers/userCtrl");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/AddPassenger",userController.addpassengercontroller);
router.post("/AddTicket",userController.addticketcontroller);
router.post("/AddTrain",userController.addtraincontroller);

module.exports = router;