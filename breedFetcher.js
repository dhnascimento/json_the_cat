const request = require('request');
let breedName = process.argv[2];


const fetchBreedDescription = function(breedName, callback) {

  let urlBreed = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
 
  request(urlBreed, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    const parseBody = JSON.parse(body);
    
    if (parseBody.length === 0) {
      const desc = null;
      return callback(error, desc);
    }
    
    const desc = parseBody[0].description;
    
    callback(error,desc);
      
  });
};

module.exports = { fetchBreedDescription };


