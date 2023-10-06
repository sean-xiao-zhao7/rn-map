const { MongoClient } = require("mongodb");
const { uri } = require("../a");

export const dbClient = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
