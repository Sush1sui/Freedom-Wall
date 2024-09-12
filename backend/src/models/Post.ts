import mongoose from "mongoose";

// Function to format the date as MM/DD/YYYY
const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};

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
    createdAt: {
        type: String,
        default: () => formatDate(new Date()), // Use the formatDate function to set default value
        required: true,
    },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
