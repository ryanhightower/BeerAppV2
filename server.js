var express = require('express');
var app = express();

app.get('/', function(request, response){
  // response.sendFile(__dirname + '/app/views/index.html');
  app.use(express.static('views'));
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
