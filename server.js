var express = require('express');
var server = express();

server
	.listen(3000, function(){
		console.log('Server running on 3000. Bottoms up...');
	});