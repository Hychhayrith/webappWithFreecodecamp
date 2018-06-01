const Express = require('express');
const BodyParser = require('body-parser');
const Cors = require('cors');
const Morgan = require('morgan')
const app = Express();

app.use(Morgan('combined'))  
app.use(BodyParser.json())
app.use(Cors())

app.post('/register', (req, res) => {
    res.send({
        message: `User email is: ${req.body.email}!`
    })
})
app.listen((process.env.PORT || 3001), ()=> {
    console.log(`Process running on port ${3001}`);
})