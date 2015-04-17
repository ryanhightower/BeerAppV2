$(document).ready(function(){

  // var apiKey = '0c77a68971da615fc90af89910f507ec',
  //     callApi = 'http://api.brewerydb.com/v2/?key=' + apiKey;
  //     console.log(callApi);

  var x = 'http://api.brewerydb.com/v2/?key=0c77a68971da615fc90af89910f507ec&/beer/O3tmVI/breweries'

  $.getJSON(x, function(data){
    debugger
    console.log(data);
  });

});
