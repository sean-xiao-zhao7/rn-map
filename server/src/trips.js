import express from "express";

import { requireAuthMiddleware } from "./middlewares/require-auth.js";

import { Coordinate } from "./models/Coordinate.js";
import { Trip } from "./models/Trip.js";

const tripsRoutes = express.Router();

tripsRoutes.post("/add-trip", requireAuthMiddleware, async (req, res) => {
    try {
        const name = req.body.name;
        const newTrip = new Trip({ userId: req.user._id, name });
        await newTrip.save();

        const lat = req.body.lat;
        const long = req.body.long;
        const newCoordinate = new Coordinate({
            tripId: newTrip._id,
            lat,
            long,
            timestamp: Date.now(),
        });
        await newCoordinate.save();

        res.status = 200;
        res.send({ message: "New trip added." });
    } catch (error) {
        console.log(error);
        if (error.message.includes("is required")) {
            res.status = 422;
            res.send("Some required fields are empty.");
        } else {
            res.status = 500;
            res.send("Server error.");
        }
    }
});

tripsRoutes.post("/add-coordinate", requireAuthMiddleware, async (req, res) => {
    try {
        const lat = req.body.lat;
        const long = req.body.long;
        const newCoordinate = new Coordinate({ lat, long });
        await newCoordinate.save();

        res.status = 200;
        res.send({ message: "New user registered.", jwt: newToken });
    } catch (error) {
        console.log(error);
        if (error.message.includes("is required")) {
            res.status = 422;
            res.send("Some required fields are empty.");
        } else {
            res.status = 500;
            res.send("Server error.");
        }
    }
});

export default tripsRoutes;
