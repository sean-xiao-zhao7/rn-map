import express from "express";
import bodyParser from "body-parser";

import authRoutes from "./auth.js";

import mongoose from "mongoose";
import { uri } from "../a.js";

mongoose.connect(uri);

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

app.get("/", (req, res) => {
    res.send("Map REST API.");
});

app.listen(5000, async () => {});
