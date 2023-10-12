import jwt from "jsonwebtoken";

import { User } from "../models/User.js";
import { jwta } from "../../a.js";

export const requireAuthMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.sendStatus(401);
    }

    const jwToken = authorization.replace("Bearer ", "");
    jwt.verify(jwToken, jwta, async (err, payload) => {
        if (err) {
            return res.sendStatus(401);
        }

        const { userId } = payload;
        try {
            const user = await User.findById(userId);
            console.log(user);
        } catch (err) {
            console.log(err.message);
            res.sendStatus(422);
        }

        res.sendStatus(200);
    });
};
