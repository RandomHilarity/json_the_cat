const request = require("request");
const consoleInput = process.argv[2];

const URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${consoleInput}`;
  
request(URL, (error, response, body) => {
  if (error) {
    console.log(`Error! `, error);
    return;
  }
  const data = JSON.parse(body);
  data.length === 0 ? console.log("Breed not Found") : console.log(data[0]["breeds"][0]["description"]);
});