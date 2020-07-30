const request = require('request');
let breed = process.argv.slice(2,4)[0];
let urlBreed = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const breedFetcher = (url) =>  {
  request(url, (error,response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);

    if (data.length === 0) {
      return console.log("This breed doesn't exist");
    }

    console.log(data[0].description);
  }
  );
};

breedFetcher(urlBreed);