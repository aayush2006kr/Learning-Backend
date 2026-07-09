const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

async function registerUser(req, res){
    const { username, email, password, role="user" } = req.body;
    
    //check if user already exisits if yes then return error message 
    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message: "User already exists"
        })
    }
            const hash = await bcrypt.hash(password , 10)

        // create new user 
        const user = await userModel.create({
            username,
            email,
            password:hash,
            role
        })

            // token create kro 
        const token = jwt.sign({
            id : user._id,
            role: user.role
        }, process.env.JWT_SECRET)

        // token ko user ko dedo , store in cookies

        res.cookie("token", token)
        // res dedo user successfuly register ho gya + user details 
        res.status(201).json({
            message: "User Registered Successfully",
            user:{
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })


}


async function loginUser(req, res){
    const {username , email , password} = req.body


     //check the field we have to select user with email or username koie v ek  
    const user = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
// user agar nhi mila toh findone() null return krega 
    if(!user){
        return res.status(401).json({message: "invalid credentials"})
    }

    //password correct haa yaa nahi check 
    const isPasswordValid = await bcrypt.compare(password , user.password)
    // if password is incorrect 
    if(!isPasswordValid){
        return res.status(401).json({message: "invalid credentials"})
    }

    const token = jwt.sign({
        id : user._id,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token)
    res.status(200).json({
        message: "Logged in successfully",
        user:{
            id : user._id,
            username : user.username,
            email : user.email ,
            role: user.role
        }

    })

    }


async function logoutUser(req, res){
    //token blacklisting unserstand , this is basic
    res.clearCookie("token")

    res.status(200).json({
        message: "user logged out sucessfully"
    })
}
module.exports = {registerUser , loginUser , logoutUser}