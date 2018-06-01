const Joi = require('joi');
module.exports = {
    register (req, res, next){
        // console.log("req body: " + req.body);
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
               new RegExp('^[a-zA-Z0-9]{8,32}$') 
            )
        }
        // console.log("email: " + schema.email + " . Password: " + schema.password)
    

        const {error} = Joi.validate(req.body , schema)
        // console.log("eror key: " + error)
        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: `This email has already been used.`
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password is invalid. <br>Please make sure you follow the following rule: </br>1. Available from a to z<br>2. Available from A to Z<br>3. Available from 0 to 9<br>4. Available from 8 to 32 characters`
                    })
                    break;
                default:
                    res.status(404).send({
                        error : `The register form is invalid.`
                    })
            }
        }else{
            next();
        }   
    }
}