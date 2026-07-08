const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    uri:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    artist:{
        type: mongoose.Schema.Types.ObjectId, // kis artist ne kis music ko create kia ha uski id store kroge 
        ref:"user",
        required:true
    }
})

const musicModel = mongoose.model("music", musicSchema)

module.exports = musicModel