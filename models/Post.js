const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    body: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    likes: Number,
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Profile",
        require:true,
    }
}, { timestamps: true });
/*
{
    "title":"Joy's post",
    "body":"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    "likes":null,
    "profile":null
} 
 */

const Post = model("Post", postSchema)

module.exports = Post;