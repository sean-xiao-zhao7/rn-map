// external imports
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// custom imports
import { uri } from "../a.js";
import { requireAuthMiddleware } from "./middlewares/require-auth.js";
import authRoutes from "./auth.js";
import tripsRoutes from "./trips.js";

mongoose.connect(uri);
const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(tripsRoutes);

app.get("/", requireAuthMiddleware, (req, res) => {
    // console.log(req.user);
    res.send("Maps REST API.");
});

app.listen(5000, async () => {});
