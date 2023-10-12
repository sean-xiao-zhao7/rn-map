import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: true },
    firstname: { type: String, unique: false, required: true },
    lastname: { type: String, unique: false, required: true },
});

userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }

            user.password = hash;
            next();
        });
    });
});

export const User = mongoose.model("User", userSchema);
