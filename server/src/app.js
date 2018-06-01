const Express = require('express');
const BodyParser = require('body-parser');
const Cors = require('cors');
const Morgan = require('morgan')
const {sequelize} = require('./models')
const Config = require('./config/config')
const app = Express();

app.use(Morgan('combined'))  
app.use(BodyParser.json())
app.use(Cors())

require('./routes.js')(app);


sequelize.sync()
.then(()=>{
    app.listen(Config.port)
    console.log(`Process running on port ${Config.port}`)
})
// app.listen((process.env.PORT || 3001), ()=> {
//     console.log(`Process running on port ${3001}`);
// })