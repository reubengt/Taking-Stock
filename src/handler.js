let path = require("path");
let fs = require("fs");

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
    '.ico':"image/x-icon"
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

const handleError = (request, response) => {
  response.writeHead(404, { 'content-type': 'text/html'});
  response.end('Oh drag! What you are looking for does not appear to be here.')
}

module.exports = {handleHome, handleError, handlePublic};
