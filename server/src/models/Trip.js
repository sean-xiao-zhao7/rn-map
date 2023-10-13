import mongoose from "mongoose";
import { coordinateSchema } from "./Coordinate.js";

const { Schema } = mongoose;

const tripSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: { type: String, default: "", required: true },
    coordinates: [coordinateSchema],
});

export const Trip = mongoose.model("Trip", tripSchema);
