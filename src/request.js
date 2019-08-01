const http = require("http");

const myRequest = (url, cb) => {
  http.get(url, (res) => {
    let statusCode = res.statusCode
    let body='';


    res.on('data', (chunk) => {
      body+=chunk;
    })
    res.on('end', () => {
      let responseObj = {};
      responseObj.body=JSON.parse(body);
      responseObj.statusCode=statusCode;
      if(statusCode !== 200)
      {
       cb(new TypeError("StatusCode is not 200, request failed"))
      }
      else
      {
        cb(null, responseObj)
      }
    })
  })
}

module.exports=myRequest
