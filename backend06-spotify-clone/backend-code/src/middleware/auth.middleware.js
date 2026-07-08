const jwt = require("jsonwebtoken")

async function authArtist(req , res , next){


    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message : "Unauotheried"
        })
    }


     try{
               
             const decoded = jwt.verify(token , process.env.JWT_SECRET)

                if(decoded.role !== "artist" ){
                    return res.status(403).json({mesaage:"Forbidden, You dont have access to create a Album"})
                }

                req.user = decoded ;

                next()
    
} catch(err){
        return res.status(401).json({
            message:"Unauthorised"
        })
    }

}


module.exports = {authArtist}
