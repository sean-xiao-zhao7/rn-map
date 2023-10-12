import express from "express";
import { dbClient } from "./db.js";

const authRoutes = express.Router();

authRoutes.post("/register", (req, res) => {
    res.sendStatus(200);
});

export default authRoutes;
