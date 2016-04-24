var fs = require('fs');


fs.readFile("./submission.csv",'utf8', function(err, result){
	var result = result.toString().split("\r\n");
  	result.shift();
   	console.log(result.length);
   	console.log(result[0].split(",")[0]);

});