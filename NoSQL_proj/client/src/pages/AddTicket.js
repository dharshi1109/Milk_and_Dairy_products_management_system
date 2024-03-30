import React, { useState } from 'react';
import axios from 'axios'
import "../styles/AddTicket.css"
import {message} from "antd";
function AddTicket() {
  const [ticketData, setTicketData] = useState({
    passengerId: '',
    trainId: '',
    fromStation: '',
    toStation:'',
    departureDate: '',
    seatNumber: '',
    ticketPrice: '',
    pnrNumber: '',
    travelStatus: 'Select Status',
    
    totalAmount: '',
    bookedByPassengerId: '',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
   try{
    const res=await axios.post('api/v1/user/AddTicket',ticketData);
    if(res.data.success)
    {
      message.success('Added successfully');
    }
    else{
      message.error(res.data.message);
    }
   }catch(error)
   {
    console.log(error);
    message.error('something went wrong');
   }
  };

  return (
    <div className="add-ticket-container">
      <h2>Add Ticket</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="fromStation">From Station:</label>
          <select
            id="fromStation"
            name="fromStation"
            value={ticketData.fromStation}
            onChange={handleInputChange}
            required
          >
            <option value="">Select From Station</option>
            <option value="">Select City</option>
            <option value="Amaravati">Amaravati</option>
            <option value="Itanagar">Itanagar</option>
            <option value="Dispur">Dispur</option>
            <option value="Patna">Patna</option>
            <option value="Raipur">Raipur</option>
            <option value="Panaji">Panaji</option>
            <option value="Gandhi Nagar">Gandhi Nagar</option>
            <option value="Chandigar">Chandigar</option>
            <option value="Shimla">Shimla</option>
            <option value="Srinagar">Srinagar</option>
            <option value="Ranchi">Ranchi</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Trivandrum">Trivandrum</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Imphal">Imphal</option>
            <option value="Shillong">Shillong</option>
            <option value="Aizawl">Aizawl</option>
            <option value="Kohima">Kohima</option>
            <option value="Bhubaneshwar">Bhubaneshwar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Gangtok">Gangtok</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Agartala">Agartala</option>
            <option value="Lucknow">Lucknow</option>
            <option value="DehraDun">DehraDun</option>
            <option value="Kolkata">Kolkata</option>
            <option value="New Delhi">New Delhi</option>
            <option value="Leh">Leh</option>
            <option value="Port Blair">Port Blair</option>
            <option value="Puducherry">Pondicherry</option>
            <option value="Kavaratti">Kavaratti</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Silvassa">Silvassa</option>
            <option value="Daman">Daman </option>
            <option value="Vijawada">Vijawada</option>
            <option value="Tezu">Tezu</option>
            <option value="Gujahati">Gujahati</option>
            <option value="Nalanda">Nalanda</option>
            <option value="Bhilai">Bhilai</option>
            <option value="Mapusa">Mapusa</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Faridabad">Faridabad</option>
            <option value="Dharamshala">Dharamshala</option>
            <option value="Jammu ">Jammu </option>
            <option value="Madurai">Madurai</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="toStation">To Station:</label>
          <select
            id="toStation"
            name="toStation"
            value={ticketData.fromStation}
            onChange={handleInputChange}
            required
          >
            <option value="">Select To Station</option>
            <option value="">Select City</option>
            <option value="Amaravati">Amaravati</option>
            <option value="Itanagar">Itanagar</option>
            <option value="Dispur">Dispur</option>
            <option value="Patna">Patna</option>
            <option value="Raipur">Raipur</option>
            <option value="Panaji">Panaji</option>
            <option value="Gandhi Nagar">Gandhi Nagar</option>
            <option value="Chandigar">Chandigar</option>
            <option value="Shimla">Shimla</option>
            <option value="Srinagar">Srinagar</option>
            <option value="Ranchi">Ranchi</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Trivandrum">Trivandrum</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Imphal">Imphal</option>
            <option value="Shillong">Shillong</option>
            <option value="Aizawl">Aizawl</option>
            <option value="Kohima">Kohima</option>
            <option value="Bhubaneshwar">Bhubaneshwar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Gangtok">Gangtok</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Agartala">Agartala</option>
            <option value="Lucknow">Lucknow</option>
            <option value="DehraDun">DehraDun</option>
            <option value="Kolkata">Kolkata</option>
            <option value="New Delhi">New Delhi</option>
            <option value="Leh">Leh</option>
            <option value="Port Blair">Port Blair</option>
            <option value="Puducherry">Pondicherry</option>
            <option value="Kavaratti">Kavaratti</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Silvassa">Silvassa</option>
            <option value="Daman">Daman </option>
            <option value="Vijawada">Vijawada</option>
            <option value="Tezu">Tezu</option>
            <option value="Gujahati">Gujahati</option>
            <option value="Nalanda">Nalanda</option>
            <option value="Bhilai">Bhilai</option>
            <option value="Mapusa">Mapusa</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Faridabad">Faridabad</option>
            <option value="Dharamshala">Dharamshala</option>
            <option value="Jammu ">Jammu </option>
            <option value="Madurai">Madurai</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="passengerId">Aadhar Number:</label>
          <input
            type="text"
            id="passengerId"
            name="passengerId"
            value={ticketData.passengerName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="trainId">Train Id:</label>
          <input
            type="text"
            id="trainId"
            name="trainId"
            value={ticketData.trainName}
            onChange={handleInputChange}
            required
          />
        </div>

        

        <div className="form-group">
          <label htmlFor="departureDate">Date of Travel:</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={ticketData.departureDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="seatNumber">Total Num of Seats:</label>
          <input
            type="text"
            id="seatNumber"
            name="seatNumber"
            value={ticketData.seatNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ticketPrice">Ticket Fare:</label>
          <input
            type="text"
            id="ticketPrice"
            name="ticketPrice"
            value={ticketData.ticketPrice}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pnrNumber">PNR Number:</label>
          <input
            type="text"
            id="pnrNumber"
            name="pnrNumber"
            value={ticketData.pnrNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="travelStatus">Travel Status:</label>
          <select
              id="travelledStatus"
              name="travelledStatus"
              value={ticketData.travelStatus}
              onChange={handleInputChange}
            >
                <option value="">Select Status</option>
              <option value="Travelled">Travelled</option>
              <option value="Cancelled">Cancelled</option>
            </select>
        </div>

        

        <div className="form-group">
          <label htmlFor="totalAmount">Total Fare:</label>
          <input
            type="text"
            id="totalAmount"
            name="totalAmount"
            value={ticketData.totalAmount}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bookedByPassengerId">Booked by Passenger ID:</label>
          <input
            type="text"
            id="bookedByPassengerId"
            name="bookedByPassengerId"
            value={ticketData.bookedByPassengerId}
            onChange={handleInputChange}
            required
          />
        </div>

        
        <button type="submit">Add Ticket</button>
      </form>
    </div>
  );
}

export default AddTicket;
