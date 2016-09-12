var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&APPID=edff73112179196381a2665d91ff1747';

// this gets called immediately when the 'require' keyword is used from a different file
module.exports = function (location, callBack) {

  // readies string for encoding to build URL
  var encodedLocation = encodeURIComponent(location);
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&APPID=edff73112179196381a2665d91ff1747';

  if(!location){
    return callBack('No location provided.');
  }

  request({
    url: url,
    json: true
  }, function(error, response, body){
    //callback function
        if(error){
          callBack('Unable to fetch weather.');
        }
        else{
          //console.log(JSON.stringify(body, null, 4));
          //4 = number of spaces of indent
          callBack('It\'s ' + body.main.temp + ' in ' + body.name + '!');
        }
  }//end function
  )//end request
}
