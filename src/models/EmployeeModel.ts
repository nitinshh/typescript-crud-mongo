import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    doj: {
        type: String,
        required: true
    }
},{
    timestamps: true
}
);

export const EmployeeModel = mongoose.model('Employee', EmployeeSchema)
