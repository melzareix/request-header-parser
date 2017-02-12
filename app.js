const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


express.listen(port, function(){
    console.log('Server running on port ' + port);
})