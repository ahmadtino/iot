const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

var port = process.env.PORT || 3000;

var command = 2;
var sensor;

app.post('/sensorreading', function(req, res){
    sensor = req.body.sensor;
    console.log(sensor);
    res.json({
        message: 'Success',
        command
    })
});

app.get('/sensorreading', function(req, res){
    res.send(sensor);
});

app.post('/ledcontrol', function(req, res){
    command = req.body.command;
    console.log(command);
    res.send("Success");
});

app.listen(port, function () {
    console.log('App listening on port http://0.0.0.0:' + port + '!');
});