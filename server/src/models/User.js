import mongoose from "mongoose";

const { Schema } = mongoose;

export const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    firstname: { type: String, unique: false, required: true },
    lastname: { type: String, unique: false, required: true },
});
