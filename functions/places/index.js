const { mocks, addMockImage } = require("./mock");
const url = require("url");

module.exports.placeRequest = (request, response) => {
  const { location } = url.parse(request.url, true).query;
  const data = mocks[location];

  if (data) {
    data.results = data.results.map(addMockImage);
  }

  response.send(data);
};
