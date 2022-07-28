const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
}, { timestamps: true });

const User = model("User", userSchema);

module.exports = User;

// user => profile => posts

/* {
    "name": "Joy Sarkar",
    "email": "joysarkar@gmail.com",
    "password": "123",
    "profile": null
} */