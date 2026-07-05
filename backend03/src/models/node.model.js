const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({     // make schema 
    title:String,
    description: String,
})

const noteModel = mongoose.model("note", noteSchema) // create model to perfrom CRUD operation

module.exports = noteModel