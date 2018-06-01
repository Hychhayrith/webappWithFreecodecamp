const {User} = require('../models');
module.exports ={
    async register (req, res){
        // console.log("req: " + req.body)
        try{
            const user = await User.create(req.body);
            // console.log("req in try:  " + req.body);
            const userJson = user.toJSON();
            // console.log("userjson"+userJson);
            res.send({
                user: userJson
            })
        }catch(err){
            res.status(400).send({
                error: `This email is already used. ${err}`
            })
        }
    }
}