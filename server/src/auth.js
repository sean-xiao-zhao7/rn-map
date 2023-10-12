import express from "express";

const authRoutes = express.Router();

authRoutes.post("/register", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

export default authRoutes;
