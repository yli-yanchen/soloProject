import mongoose, { mongo } from "mongoose";

const projectSchema = mongoose.Schema({
    ID: Number,
    Name: String,
    Client: String,
    Address: String,
    City: String,
    Contract_Date: Date,
    CurrentStatus: String,
    Contract_Amount: Number,
    Reimbursable: Number,
    Paid_Amount: Number,
    Balance: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const project = mongoose.model("project", projectSchema);

export default project;