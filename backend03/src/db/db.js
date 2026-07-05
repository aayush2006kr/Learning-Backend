const mongoose = require("mongoose");
async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:hypondr3cUGPjhFy@backend02.e8rzvsj.mongodb.net/halley")
    console.log("connected to db");
}
module.exports = connectDB


