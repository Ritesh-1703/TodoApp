const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Mongo Database !!");
    } catch (err) {
        console.error("Failed to connect:- ", err);
        process.exit(1);
    }
};

module.exports = { connectDB };