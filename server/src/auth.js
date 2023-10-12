import express from "express";
import { dbClient } from "./db.js";

const authRoutes = express.Router();

authRoutes.post("/register", (req, res) => {
    console.log(req);
});

export default authRoutes;
