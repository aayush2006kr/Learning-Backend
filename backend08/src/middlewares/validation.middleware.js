const {body , validationResult} = require("express-validator")


async function validateResult(req, res , next){
    
    const err = validationResult(req)

    if(!err.isEmpty()){

        return res.status(400).json({
            err: err.array()
        })
    }

    next()

}



const registerUserValidationRules = [
    body("username")
    .isString()
    .withMessage("username must be string ")
    .isLength({min:3,max:20})
    .withMessage("username must be between 3 to 20 characters"),

    body("email")
    .isString()
    .withMessage("email must be string ")
    .isEmail()
    .withMessage("email must be a valid email address"),

    body("password")
    .isString()
    .withMessage("password must be string ")
    .isLength({min:3,max:100})
    .withMessage("password must be between 3 to 100 characters"),

    validateResult
]


module.exports = {registerUserValidationRules}
