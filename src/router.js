const router = (request, response) => {
  const endpoint = request.url;

  if(endpoint === '/'){
    handleHome(request, response, endpoint)
  }
}


module.exports = router;
