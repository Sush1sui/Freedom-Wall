import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    SN: {
        type: String,
        unique: true,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
});

const Member = mongoose.model("Member", memberSchema);

export default Member;
