const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({     // make schema 
    title:String,
    description: String,
})

const noteModel = mongoose.model("note", noteSchema) // create model to perfrom CRUD operation
                                                     // note is collection of data and its name is note , can be seen in database
module.exports = noteModel