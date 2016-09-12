var request = require('request');
var url = 'http://ipinfo.io';

// module exports to create function
// make request to url with JSON
// if errror callback()
// else callback(body)

// request('http://ipinfo.io', function(error, res, body) {
//   console.log(JSON.parse(body))
// })

// this gets called immediately when the 'require' keyword is used from a different file
module.exports = function (callBack) {

  request({
    url: url,
    json: true
  }, function(error, response, body){
    //callback function
        if(error){
          callBack();
        }
        else{
          callBack(body);
        }
  }//end function
  )//end request
}
