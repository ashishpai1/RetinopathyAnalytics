var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
app.use(function(req, res, next) {
  req.headers['if-none-match'] = 'no-match-for-this';
  next();    
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});




app.get('/getAnalytics', function (req, res) {
	fs.readFile(__dirname + "/public" + "/submission.csv",'utf8', function(err, result){
		console.log(result);
		var result = result.toString().split("\r\n");
  		result.shift();
  	 	console.log(result[0].split(",")[0]);	  	
  	    res.send(result);
	});  
});

app.listen(3008, function () {
  console.log('Example app listening on port 3008!');
});

