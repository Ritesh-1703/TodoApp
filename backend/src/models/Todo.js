const mongoose = require("mongoose");


const todoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    title: { type: String, required: true },
    completed: { type: Boolean, default: true },
    date: { type: Date, required: true }
},
    { timestamps: true });

module.exports = mongoose.model("Todo", todoSchema);