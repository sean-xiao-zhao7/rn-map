import mongoose from "mongoose";

const { Schema } = mongoose;

const coordinateSchema = new Schema({
    tripId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trip",
        required: true,
    },
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
});

export const Coordinate = mongoose.model("Coordinate", coordinateSchema);
