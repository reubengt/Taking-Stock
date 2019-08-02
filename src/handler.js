let path = require("path");
let fs = require("fs");
let url = require("url");
let myRequest = require('./request.js')
let filterLatestPrice = require('./filterLatestPrice.js')

const handleHome = (request, response) => {
  const filepath = path.join(__dirname,'..','public','index.html');
  fs.readFile(filepath, (error, file) => {
    if(error){
      response.writeHead(500, {'content-type': 'text/html'});
      response.end("Internal Server Mishap");
    }
    else{
      response.writeHead(200, {'content-type': 'text/html'});
      response.end(file);
    }
  })
}

const handlePublic = (request, response, endpoint) => {
  const extension = path.extname(endpoint)
  let extensionType = {
    '.html': "text/html",
    '.css':"text/css",
    '.js':"application/javascript",
    '.ico':"image/x-icon",
    '.jpg':"image/jpg"
  }
  const filePath = path.join(__dirname, "..", endpoint)
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, {'content-type': 'text-html'});
      response.end('<h1>Ooooopssss, page has not been found</h1>');
    }else {
      response.writeHead(200, { 'content-type': extensionType[extension]});
      response.end(file);
    }
  });
}
const handleSearch = (requestFromFrontEnd, responseToFrontEnd, endpoint) => {
  const urlObject= url.parse(endpoint, true);
  // console.log('urlObject: ',urlObject);
  console.log(urlObject.query);
  const searchTerm = urlObject.query.q;
  //object with different endpoints for different queries
  const apiUrl =`https://www.quandl.com/api/v3/datasets/CHRIS/${searchTerm}/data.json`
  //call myRequest to make request and return response
  myRequest(apiUrl, (err, responseFromAPI) => {
    if(err)
    console.log(err.message);
    else {
    const latestPrice = filterLatestPrice(JSON.parse(responseFromAPI));
    console.log(latestPrice);
    responseToFrontEnd.writeHead(200, { 'content-type': 'application/json'});
    responseToFrontEnd.end(JSON.stringify(latestPrice));
    }
  })

  }
const handleError = (request, response) => {
  response.writeHead(404, { 'content-type': 'text/html'});
  response.end('Oh drag! What you are looking for does not appear to be here.')
}

module.exports = {handleHome, handlePublic, handleSearch, handleError };
