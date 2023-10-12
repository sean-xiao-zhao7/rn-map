import express from "express";
import { User } from "./models/User.js";

const authRoutes = express.Router();

authRoutes.post("/register", async (req, res) => {
    try {
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const newUser = new User(email, password, firstname, lastname);
        await newUser.save();
        res.status = 200;
        res.send("User added.");
    } catch (error) {
        if (error.message.includes("is required")) {
            res.status = 402;
            res.send("Some required fields are empty.");
        } else {
            res.status = 500;
            res.send("Server error.");
        }
    }
});

export default authRoutes;
