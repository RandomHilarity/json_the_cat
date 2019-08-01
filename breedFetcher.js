const request = require("request");
  
const fetchBreedDescription = function(breed, callback) {
  
  const URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`;
  
  request(URL, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    let output = "";
    const data = JSON.parse(body);
    data.length === 0 ? callback(error, `Breed ${breed} not found.`) : callback(error, data[0]["breeds"][0]["description"]);
    return output;
  });
};

module.exports = { fetchBreedDescription };