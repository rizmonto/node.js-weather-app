var weather = require('./weather.js');
var location = require('./location.js');

// set up yargs to have a location or -l arguments
var argv = require('yargs')
  .option('location', {
    alias: 'l',
    demand: false,
    describe: 'Location to fetch weather for',
    type: 'string'
  })
  .option('AII WOW!', {
    alias: 'Filipino',
    demand: false,
    describe: 'Filipino Style Input wow!',
    type: 'string'
  })
  .help('help')
  .argv;

// get the weather, location was provided
if(typeof argv.l === 'string' && argv.l.length > 0){
  weather(argv.l, function(currentWeather){
    console.log(currentWeather);
  });
}
else{
  // try to guess the location
  location(function(approxLocation){
    if(approxLocation){
      weather(approxLocation.city, function(currentWeather){
        console.log(currentWeather);
      });
    }//end if
    else{
      console.log('Unable to guess location')
    }//end else
  }); //end location
  console.log('No Location given');
}

// if location provided
//  call weather(location, callback)
// else
//    call location
//      call weather(location, callback)
