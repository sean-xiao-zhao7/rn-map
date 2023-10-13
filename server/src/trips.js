import express from "express";

import { requireAuthMiddleware } from "./middlewares/require-auth.js";

import { Coordinate } from "./models/Coordinate.js";
import { Trip } from "./models/Trip.js";

const tripsRoutes = express.Router();
tripsRoutes.use(requireAuthMiddleware);

tripsRoutes.post("/add-trip", async (req, res) => {
    try {
        const name = req.body.name;
        const newTrip = new Trip({ userId: req.user._id, name });
        await newTrip.save();

        const lat = req.body.lat;
        const long = req.body.long;
        const newCoordinate = new Coordinate({
            tripId: newTrip._id,
            userId: req.user._id,
            lat,
            long,
            timestamp: Date.now(),
        });
        await newCoordinate.save();

        newTrip.coordinates.push(newCoordinate);
        newTrip.save();

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

tripsRoutes.post("/add-coordinate", async (req, res) => {
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

tripsRoutes.get("/get-trips", async (req, res) => {
    try {
        const trips = await Trip.find({ userId: req.user._id });
        res.status = 200;
        res.send(trips);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

tripsRoutes.get("/get-coordinates", async (req, res) => {
    try {
        const coordinates = await Coordinate.find({ userId: req.user._id });
        res.status = 200;
        res.send(coordinates);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

tripsRoutes.delete("/delete-trip", async (req, res) => {
    try {
        await Trip.findByIdAndRemove(req.body.tripId);
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(422);
    }
});

tripsRoutes.delete("/delete-coordinates", async (req, res) => {
    try {
        await Coordinate.findOneAndRemove({ tripId: req.body.tripId });
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(422);
    }
});

export default tripsRoutes;
