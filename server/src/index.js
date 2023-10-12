// external imports
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// custom imports
import authRoutes from "./auth.js";
import { uri } from "../a.js";
import { requireAuthMiddleware } from "./middlewares/require-auth.js";

mongoose.connect(uri);
const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

app.get("/", requireAuthMiddleware, (req, res) => {
    // console.log(req.user);
    res.send("Maps REST API.");
});

app.listen(5000, async () => {});
