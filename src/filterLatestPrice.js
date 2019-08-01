
const filterLatestPrice = (responseFromAPI) => {
  return responseFromAPI.body.dataset_data.data[0][1];
}

module.exports = filterLatestPrice;
