const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
    passengerId: {
    type: Number,
    required: [true, "passengerId is require"],
  },
  trainId: {
    type: Number,
    required: [true, "trainId is require"],
  },
  fromStation: {
    type: String,
    required: [true, "fromStation is require"],
  },
  toStation: {
    type: String,
    required: [true, "toStation is require"],
  },
  departureDate: {
    type: Date,
    required: [true, "departureDate is require"],
  },
  seatNumber: {
    type: Number,
    required: [true, "seatNumber is require"],
  },
  ticketPrice: {
    type: Number,
    required: [true, "ticketPrice is require"],
  },
  pnrNumber: {
    type: Number,
    required: [true, "pnrNumber is require"],
  },
  travelStatus: {
    type: String,
    required: [true, "travelStatus is require"],
  },
  totalAmount: {
    type: Number,
    required: [true, "totalAmount is require"],
  },
  bookedByPassengerId: {
    type: Number,
    required: [true, "bookedByPassengerId is require"],
  },
  
  
});
 
const ticketModel = mongoose.model("Tickets", ticketSchema);

module.exports = ticketModel;