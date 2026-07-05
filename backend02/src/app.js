// server ko create karna 
const express = require("express");

const app = express();
app.use(express.json()) //middleware jo ki request body ko json me convert karega

const notes = [] // ye array me hum notes ko store karenge

app.post("/notes",(req,res)=>{  
   
    notes.push(req.body)

    res.status(201).json({            // 201 ka matlab hai ki resource create ho gaya
        message: "note added successfully",
    })

})


app.get("/notes",(req,res)=>{

     res.status(200).json({                // 200 ka matlab hai ki request successful hai
        message: "notes fetched successfully",
         notes: notes
    })
})

            // /notes/2 (:ke baad wala dynamic hoga)
app.delete("/notes/:index", (req,res)=>{
                const index = req.params.index          // index ko params se le rahe hai
                delete notes[index]                          // notes ke index ko delete kar rahe hai
                res.status(200).json({       // 200 ka matlab hai ki request successful hai
                    message: "notes deleted successfully"
                })
})


app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index           // index ko params se le rahe hai
    const description = req.body.description         // description ko body se le rahe hai
    notes[index].description = description // notes ke index ko update kar rahe hai
    res.status(200).json({                   // 200 ka matlab hai ki request successful hai
        message:"note updated successfully"
    })
})

module.exports = app


