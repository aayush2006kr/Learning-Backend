const express = require("express");
const authController = require("../controllers/auth.controller")
const router = express.Router();



// user register/signup krega wo wali api 
router.post("/register", authController.registerUser )


//login user api
router.post("/login" , authController.loginUser)

router.post("/logout", authController.logoutUser)





module.exports = router;