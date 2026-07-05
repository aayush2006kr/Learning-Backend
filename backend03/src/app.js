// server ko create karna 
const express = require("express");
const noteModel = require("./models/node.model")

const app = express();
app.use(express.json()); //middle ware to store data in req.body

//post/notes create a note 
app.post("/notes",async (req,res)=>{

    const data = req.body //{title,description}

    await noteModel.create({
        title: data.title, 
        description: data.description
    })

    res.status(201).json({
        message:"Note Created"
    })

})



//get/notes get all notes/fetch all notes
app.get("/notes",async (req,res)=>{

   const notes = await noteModel.find()// sara note ke leke aata ha always return array of obj



//    const notes = await noteModel.findOne({  //single obj laagia bas jiska naam test_tit_0 haa or agar aisa naam ka nhi mila toh NULL dega
//     title: "test_tit_0"                         
//    })


res.status(200).json({
    message:"notes fetched successfully",
    notes: notes
})

})



// delete note 
app.delete("/notes/:id", async (req,res)=>{

    const id = req.params.id 

    await noteModel.findOneAndDelete({

        _id : id
    })

    res.status(200).json({
        message:"note deleted successfully"
    })
})

app.patch("/notes/:id", async (req,res)=>{
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({       // take 2 obj one is kkiske basis pe find kroge and dusra kya update karna ha
        _id: id}, {
        description: description
    })
    res.status(200).json({
        message:"note updated successfully"
    })
})

module.exports = app

//hypondr3cUGPjhFy
