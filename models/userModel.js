const e = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        required: [ true, "Role is required"],
        enum: ["admin", "organisation","user","hospital"],
    },
    name: {
        type: String,
        required: function () {
            if (this.role === "user" || this.role === "admin") {
                return true;
            }
            return false;
        }
    },
    organisationName: {
        type: String,
        required: function () {
            if (this.role === "organisation") {
                return true;
            }
            return false;
        }
    },
    hospitalName: {
        type: String,
        required: function () {
            if (this.role === "hospital") {
                return true;
            }
            return false;
        }
    },
    email: {
        type: String,
        required: [ true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [ true, "Password is required"]
    },
    website: {
        type: String
    },
    address: {
        type: String,
        required: [ true, "Address is required"]
    },
    phone: {
        type: String,
        required: [ true, "Phone number is required"],
        match: [/^[0-9]{10}$/, "Phone number must be exactly 10 digits"]
    },

},{ timestamps: true }); 


module.exports = mongoose.model("users", userSchema);