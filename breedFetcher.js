const request = require('request');

const args = process.argv.slice([2]);

// request ('https://api.thecatapi.com/v1/breeds/search?q=' + args, function(error, response, body) {
//   if (error) {
//     console.log('THERE WAS AN ERROR');
//     return;
//   }
  
//   let parsed = JSON.parse(body);
  
//   if (parsed.length === 0) {
//     console.log("Sorry, that cat doesn't exist :(");
//   } else {
//     console.log(parsed[0].description);
//   }
// });


const fetchBreedDescription = function(breedName, callback) {
  request ('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function(error, response, body) {
  if (error) {
    callback(error, null)
    console.log('THERE WAS AN ERROR');
    return;
  }
  
  let parsed = JSON.parse(body);
  
  if (parsed.length === 0) {
    callback(error, "Sorry, that cat doesn't exist :(")
    // console.log("Sorry, that cat doesn't exist :(");
  } else {
    callback(null, parsed[0].description)
    // console.log(parsed[0].description);
  }
 });
};

module.exports = { fetchBreedDescription };

// const get = function(url, callback) {
//   request.get(url, function (error, response, body) {
//     if (error) {
//       callback(error,null)
//     } else {
//       callback(null,body)
//     }
//   })
// }