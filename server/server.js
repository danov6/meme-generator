const express = require('express');
const port = 3001;
const app = express();
const cors = require('cors');

const http = require('http');

require('colors');

app.use(cors());

app.get('/',function(req,res){
    console.log('Server is working good chief')
});

let server;
server = http.createServer(app).listen(port, function () {
    console.log("[ server ] -----------------------------------------------------------".cyan);
    console.log(`[ server ] ------------ It's over port: ${port}!!! ( http ) -------------`.cyan);
    console.log("[ server ] -----------------------------------------------------------".cyan);
});