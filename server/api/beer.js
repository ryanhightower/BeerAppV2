var BreweryDb = require('brewerydb-node'); 
var brewdb = new BreweryDb('3c5b60e0236d76112a44f5f381eb38f7');

module.exports = function(app){
  
  // return all beers
  app.get('/beer', function(req, res){
  // Make brewdb call here
    
  	brewdb.beers(function(err, data){
  		if(err) throw err;

  		res.send(data);
  	});
  });

  // return a single beer
  app.get('/beers/:id', function(req, res){
    var beerId = parseInt(req.params.id, 10);
    // Make brewdb call here
	   

  });
};