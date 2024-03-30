const express = require('express');
const router = express.Router();
const tickets1 = require('../models/ticketModels'); // Replace 'YourModel' with your actual model
const passengers1 = require('../models/userModels');
const trains1 = require('../models/trainModels');
  
router.get('/calculateRevenue', async (req, res) => {
  try {
    // Retrieve data from the database and perform the MongoDB aggregation query
    const st=new Date(req.query.startDate);
    const ey=new Date(req.query.endDate);
    const z=req.query.zone;
    const result = await tickets1.aggregate([
        
        {
            $lookup: {
              from: "passengers",
              localField: "passengerId",
              foreignField: "passengerId",
              as: "passengerData"
            }
          },
          {
            $lookup: {
              from: "trains",
              localField: "trainId",
              foreignField: "trainId",
              as: "trainData"
            }
          },
          {
            $match: {
              "departureDate": {
                $gte:st,
                $lt: ey
              }
            }
          },
          {
            $unwind: "$passengerData"
          },
          {
            $unwind: "$trainData"
          },
          {
            $group: {
              _id: "$trainData.railwayZone",
              totalRevenue: { $sum: "$totalAmount" }
            }
          },
          {
            $project: {
              _id: 0,
              railwayZone: "$_id",
              totalRevenue: 1
            }
          }
    ]);

    console.log("Query1 API Response:", result);
        if (result.length === 0) {
            res.status(404).send({
                message: "No data found for the specified criteria",
                success: false
            });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error querying data",
            success: false,
        });
    }
});
router.get('/query2', async (req, res) => {
  try {
    // Retrieve data from the database and perform the MongoDB aggregation query
    const st=new Date(req.query.startDate);
    const ey=new Date(req.query.endDate);
    const z=req.query.trainid;
    const result = await tickets1.aggregate([
        
        {
            $lookup: {
              from: "passengers",
              localField: "passengerId",
              foreignField: "passengerId",
              as: "passengerData"
            }
          },
          {
            $lookup: {
              from: "trains",
              localField: "trainId",
              foreignField: "trainId",
              as: "trainData"
            }
          },
          {
            $match: {
              "departureDate": {
                $gte:st,
                $lt: ey
              }
            }
          },
          {
            $unwind: "$passengerData"
          },
          {
            $unwind: "$trainData"
          },
          {
            $group: {
              _id: "$trainData.trainId",
              totalRevenue: { $sum: "$totalAmount" }
            }
          },
          {
            $project: {
              _id: 0,
              railwayZone: "$_id",
              totalRevenue: 1
            }
          }
    ]);

    console.log("Query2 API Response:", result);
        if (result.length === 0) {
            res.status(404).send({
                message: "No data found for the specified criteria",
                success: false
            });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error querying data",
            success: false,
        });
    }
});
router.get('/query3', async (req, res) => {
  try {
    // Retrieve data from the database and perform the MongoDB aggregation query
    const st=new Date(req.query.startDate);
    const ey=new Date(req.query.endDate);
    const result = await tickets1.aggregate([
        
        {
            $lookup: {
              from: "passengers",
              localField: "passengerId",
              foreignField: "passengerId",
              as: "passengerData"
            }
          },
          {
            $lookup: {
              from: "trains",
              localField: "trainId",
              foreignField: "trainId",
              as: "trainData"
            }
          },
          {
            $match: {
              "departureDate": {
                $gte:st,
                $lt: ey
              }
            }
          },
          {
            $unwind: "$passengerData"
          },
          {
            $unwind: "$trainData"
          },
          {
            $group: {
              _id: "$trainData.trainId",
              totalcount: { $sum: 1 }
            }
          },
          {
            $project: {
              _id: 0,
              railwayZone: "$_id",
              totalcount: 1
            }
          }
    ]);

    console.log("Query3 API Response:", result);
        if (result.length === 0) {
            res.status(404).send({
                message: "No data found for the specified criteria",
                success: false
            });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error querying data",
            success: false,
        });
    }
});
router.get('/query4', async (req, res) => {
  try {
    // Retrieve data from the database and perform the MongoDB aggregation query
    const st=new Date(req.query.startDate);
    const ey=new Date(req.query.endDate);
    const z=req.query.trainid;
    const result = await tickets1.aggregate([
        
        {
            $lookup: {
              from: "passengers",
              localField: "passengerId",
              foreignField: "passengerId",
              as: "passengerData"
            }
          },
          {
            $lookup: {
              from: "trains",
              localField: "trainId",
              foreignField: "trainId",
              as: "trainData"
            }
          },
          {
            $match: {
              "departureDate": {
                $gte:st,
                $lt: ey
              }
            }
          },
          {
            $unwind: "$passengerData"
          },
          {
            $unwind: "$trainData"
          },
          {
            $group: {
              _id: "$passengerData.gender",
              totalcount: { $sum: 1 }
            }
          },
          {
            $project: {
              _id: 0,
              gender: "$_id",
              totalcount: 1
            }
          }
    ]);

    console.log("Query4 API Response:", result);
        if (result.length === 0) {
            res.status(404).send({
                message: "No data found for the specified criteria",
                success: false
            });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error querying data",
            success: false,
        });
    }
});
router.get('/query5', async (req, res) => {
  try {
    // Retrieve data from the database and perform the MongoDB aggregation query
    const st=new Date(req.query.startDate);
    const ey=new Date(req.query.endDate);

    const result = await passengers1.aggregate([
         
      {
        $match: {
        
          "bookingHistory": { $size: 1}
         
        }
      },
      {
        $group: {
          _id: null,
          passengerCount: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          passengerCount: 1
        }
      }
]);
    console.log("Query5 API Response:", result);
        if (result.length === 0) {
            res.status(404).send({
                message: "No data found for the specified criteria",
                success: false
            });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error querying data",
            success: false,
        });
    }
});

module.exports = router;
