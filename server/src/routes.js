const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports =   (app )=> {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register),
    app.get('/', (req, res) => {
        res.send({
           'message' : "I'm index"
        })
    })

}
