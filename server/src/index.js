// external imports
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// custom imports
import authRoutes from "./auth.js";
import { uri } from "../a.js";

mongoose.connect(uri);
const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

app.get("/", (req, res) => {
    res.send("Maps REST API.");
});

app.listen(5000, async () => {});
