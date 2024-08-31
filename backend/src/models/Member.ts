import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    SN: {
        type: String,
        unique: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
});

const Member = mongoose.model("Member", memberSchema);

export default Member;
