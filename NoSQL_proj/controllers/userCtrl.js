const userModel = require("../models/userModels");
const ticketModel = require("../models/ticketModels");
const trainModel=require("../models/trainModels")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register callback
const addpassengercontroller = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ passengerId: req.body.passengerId });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const {
        passengerId,
        name,
        age,
        dateOfBirth,
        gender,
        occupation,
        email,
        mobileNum,
        nationality,
        cancellationHistory,
        bookingHistory,    
        addressCity, 
        addressState} = req.body;
    
    const newUser = new userModel({passengerId,
        name,
        age,
        dateOfBirth,
        gender,
        occupation,
        email,
        mobileNum,
        nationality,
        cancellationHistory,
        bookingHistory,    
        addressCity, 
        addressState});
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};
const addticketcontroller = async (req, res) => {
    try {
      
      const {
        passengerId,
        trainId,
        fromStation,
        toStation,
        departureDate,
        seatNumber,
        ticketPrice,
        pnrNumber,
        travelStatus,
        totalAmount,
        bookedByPassengerId} = req.body;
      
      const newTicket = new ticketModel({passengerId,
        trainId,
        fromStation,
        toStation,
        departureDate,
        seatNumber,
        ticketPrice,
        pnrNumber,
        travelStatus,
        totalAmount,
        bookedByPassengerId});
      await newTicket.save();
      res.status(201).send({ message: "Register Sucessfully", success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Register Controller ${error.message}`,
      });
    }
  };
  const addtraincontroller = async (req, res) => {
    try {
      
      const {
        trainId,
        trainName,        
        srccity, 
        srcstate,
        descity,
        desstate,
        railwayZone,
        totalSeatingCapacity,
        } = req.body;
      
      const newTrain = new trainModel({
        trainId,
        trainName,        
        srccity, 
        srcstate,
        descity,
        desstate,
        railwayZone,
        totalSeatingCapacity,});
      await newTrain.save();
      res.status(201).send({ message: "Register Sucessfully", success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Register Controller ${error.message}`,
      });
    }
  };
// login callback

module.exports = { addpassengercontroller,addticketcontroller,addtraincontroller};