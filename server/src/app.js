const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors()); //Can be a security risk if this enabled. Allows any client around the world can hit the server.


//All routes defined in routes.js
require('./routes')(app)



sequelize.sync()
.then(() => {

  app.listen(config.port || 8081)
  console.log(`Server Started on ${config.port}`)
})


