// dependencies
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./userRouter");

// initializing app 
const app = express();
require("dotenv").config()

// middleware
app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send("Hello")
});

// listening on port 3000
mongoose.connect(process.env.DB_CONNECTION_URI,  {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log("server running on port " + process.env.DB_CONNECTION_URI);
        })
}).catch(err => console.log(err));