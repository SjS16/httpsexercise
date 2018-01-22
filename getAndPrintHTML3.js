var https = require('https');


function getAndPrintHTML (options) {

var options = requestOptions;
// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    var dataChunks = ""
    for(var i = 0; i < data.length; i++); {
      dataChunks += data;
    // console.log('Data chunk buffering.');
     }console.log(dataChunks);
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function () {
    console.log('Response stream complete.');
  });

});

}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

//invoke and call function
console.log(getAndPrintHTML());