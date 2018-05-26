const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors()); //Can be a security risk if this enabled. Allows any client around the world can hit the server.


app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})





app.listen(process.env.PORT || 8081, function(){
  console.log('Server Started')
});

