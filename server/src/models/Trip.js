import mongoose from "mongoose";

const { Schema } = mongoose;

const tripSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: { type: String, default: "", required: true },
});

export const Trip = mongoose.model("Trip", tripSchema);
