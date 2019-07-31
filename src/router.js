const handlers=require('./handler')

const router = (request, response) => {
  const endpoint = request.url;

  if(endpoint === '/'){
    handlers.handleHome(request, response)
  }
}


module.exports = router;
