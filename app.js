const express = require('express');
const logger = require('morgan');
const path = require('path');
const apiv1 = require('./routes/apiv1');

const app = express();
const port = process.env.PORT || 3000;

app.use('api/v1', apiv1);
express.listen(port, function(){
    console.log('Server running on port ' + port);
})