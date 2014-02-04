var express = require('express');
var app = express();
var fs  = require('fs');
var routes = require('./routes');
var app = express();

var Readdir = require('readdir');

app.get('/', function(req, res) {
    fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
        	res.send(text);

    	});
	});



var results = Readdir('data/',function(err,arr){


	fs.writeFile('output.json', JSON.stringify(arr, null, 4), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
});




app.listen(3000);
console.log('listening on port:3000');

