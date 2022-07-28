// dependencies
const express = require("express");
const Post = require("./models/post");
const Profile = require("./models/profile");
const User = require("./models/User");

const userRouter = express.Router();

// adding users
userRouter.post("/addUser", async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.send(result);
    } catch (error) {
        res.send(err)
    }

});

//creating user's profile

userRouter.post("/profile/:userID", async (req, res) => {
    try {
        const userID = req.params.userID;
        const profile = new Profile({
        title: req.body.title,
        address: req.body.address,
        phone: req.body.phone,
        hobbies: ["playing music"],
        socialLinks: ["https://www.facebook.com/joysarkar490/"],
        post: [],
        user: userID,
        });
        const result = await profile.save();
        const setProfileId = await User.findOneAndUpdate({ _id: userID }, {
            $set: {
                profile: result._id,
            }
        },{new:true});
        res.send(setProfileId);
    } catch (error) {
        res.send(err)
    }

});

// creating post under profile
userRouter.post("/post/:profileID", async (req, res) => {
    try {
        const profileID = req.params.profileID;
        const post = new Post({
        title: req.body.title,
        body: req.body.body,
        profile: profileID,
        });
        const result = await post.save();
        const setPostId = await Profile.findOneAndUpdate({ _id: profileID }, {
            $push: {
                posts: result._id,
            }
        },{new:true});
        res.send(setPostId);
    } catch (error) {
        res.send(err)
    }

});

// get methods
userRouter.get("/", async (req, res) => {
    // const result = await User.find({});

    // with id specific data
    // const result = await User.find({}).select("name");

    // without id data
    // const result = await User.find({}).select("name -_id");

    // const result = await User.find({}).populate("profile");

    // const result = await User.find({}).populate({ path: "profile", select: "title phone -_id"});

    const result = await User.find({}).populate("profile");

    for (let doc of result) {
    await Profile.populate(doc.profile, {path: "posts"})
}
    res.send(result);
})

module.exports = userRouter;