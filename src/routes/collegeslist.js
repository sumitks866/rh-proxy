const axios = require("axios");

async function getColleges(req, res) {
  const { data } = await axios.get(
    "http://universities.hipolabs.com/search?country=India"
  );
  res.json(data);
}

module.exports = getColleges