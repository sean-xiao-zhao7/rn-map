import pkg from "mongodb";
const { MongoClient } = pkg;
import { uri } from "../a.js";

// Create a new MongoClient
export const dbClient = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
