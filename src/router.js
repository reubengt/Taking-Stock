const router = (request, response) => {
  const endpoint = request.url;

  if(endpoint === '/'){
    handleHome(request, response)
  }
}


module.exports = router;
