import express from "express";
import bodyParser from "body-parser";

import { dbClient } from "./db.js";
import authRoutes from "./auth.js";

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

app.get("/", (req, res) => {
    res.send("Map REST API.");
});

app.listen(5000, async () => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await dbClient.connect();
        // Send a ping to confirm a successful connection
        await dbClient.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        await dbClient.close();
    }
});
