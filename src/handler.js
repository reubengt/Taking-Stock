let path = require("path");
let fs = require("fs");

let extensions = {
  '.html': "text/html",
  '.css':"text/css",
  '.js':"application/javascript",
  '.ico':"image/x-icon"
}

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
   let extensionType = path.extname(endpoint)
   let extensions = {
     '.html': "text/html",
     '.css':"text/css",
     '.js':"application/javascript",
     '.ico':"image/x-icon"
   }
   fs.readFile(filePath, (error, file) => {
     if (error){
       response.write(404, {'content-type': 'text/html'});

     }
   })
 }
const handleError = (request, response) => {
  response.writeHead(404, { 'content-type': 'text/html'});
  response.end('Oh drag! What you are looking for does not appear to be here.')
}

module.exports = {handleHome, handleError}
