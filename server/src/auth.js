import express from "express";
import jwt from "jsonwebtoken";

import { User } from "./models/User.js";
import { jwta } from "../a.js";

const authRoutes = express.Router();

authRoutes.post("/register", async (req, res) => {
    try {
        // add user
        const email = req.body.email;
        const password = req.body.password;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const newUser = new User({ email, password, firstname, lastname });
        await newUser.save();

        // return jwt
        const newToken = jwt.sign(
            {
                userId: newUser._id,
            },
            jwta
        );

        res.status = 200;
        res.send({ message: "New user registered.", jwt: newToken });
    } catch (error) {
        console.log(error);
        if (error.message.includes("is required")) {
            res.status = 422;
            res.send("Some required fields are empty.");
        } else if (error.message.includes("email_1 dup key")) {
            res.status = 422;
            res.send(`Email ${req.body.email} is already registered.`);
        } else {
            res.status = 500;
            res.send("Server error.");
        }
    }
});

export default authRoutes;
