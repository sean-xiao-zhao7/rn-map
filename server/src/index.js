const express = require("express");
const { dbClient } = require("./db");

const app = express();

app.get("/", (req, res) => {
    res.send("hi");
});

app.listen(5000, () => {});
