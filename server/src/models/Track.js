import mongoose from "mongoose";

const { Schema } = mongoose;

const trackSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: true },
    firstname: { type: String, unique: false, required: true },
    lastname: { type: String, unique: false, required: true },
});

export const Track = mongoose.model("Track", trackSchema);
