const request = require('request');

const args = process.argv.slice([2]);

request ('https://api.thecatapi.com/v1/breeds/search?q=' + args, function(error, response, body) {
  if (error) {
    console.log('THERE WAS AN ERROR');
    return;
  }
  
  let parsed = JSON.parse(body);
  
  if (parsed.length === 0) {
    console.log("Sorry, that cat doesn't exist :(");
  } else {
    console.log(parsed[0].description);
  }
});
