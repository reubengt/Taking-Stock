const https = require("https");

const myRequest = (url, cb) => {
  https.get(url, (res) => {
    let statusCode = res.statusCode
    let body='';


    res.on('data', (chunk) => {
      body+=chunk;
    })
    res.on('end', () => {
      let responseObj = {};
      responseObj.body=JSON.parse(body);
      console.log(JSON.parse(body))
      responseObj.statusCode=statusCode;
      if(statusCode !== 200)
      {
       cb(new TypeError("StatusCode is not 200, request failed"))
      }
      else
      {
        cb(null, JSON.stringify(responseObj))
      }
    })
  })
}

module.exports=myRequest
