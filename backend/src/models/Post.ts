import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        maxLength: [60, "Title should not exceed 60 characters"],
        required: [true, "Title should not be empty"],
    },
    body: {
        type: String,
        maxLength: [8000, "Are you writing a novel?"],
        required: [true, "Title should not be empty"],
    },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
