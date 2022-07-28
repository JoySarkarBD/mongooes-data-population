const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const profileSchema = new Schema({ 
    title: {
        type: String,
        required: true,
        trim:true,
    },
    address: String,
    phone: Number,
    hobbies: [String],
    socialLinks: [String],
    posts:[{
        type: Schema.Types.ObjectId,
        ref:"Post"
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref:"User"
    }
}, { timestamps: true })

const Profile = model("Profile", profileSchema);

module.exports = Profile;

/*{ "title":"Joy's profile",
"address":"Dhaka",
"phone":123,
"hobbies":["playing music"],
"socialLinks":["https://www.facebook.com/joysarkar490/"],
"post":[],
"user":null
}*/