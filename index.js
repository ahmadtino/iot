const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

var port = process.env.PORT || 3000;

var command = 2;
var sensor = 300;

app.post('/sensorreading', function(req, res){
    sensor = req.body.sensor;
    console.log(sensor);
    res.status(200).json({
        message: 'Success',
        command
    })
});

app.get('/sensorreading', function(req, res){
    res.status(200).json({sensor});
});

app.post('/ledcontrol', function(req, res){
    command = req.body.command;
    console.log(command);
    res.status(200).send("Success");
});

app.listen(port, function () {
    console.log('App listening on port http://0.0.0.0:' + port + '!');
});