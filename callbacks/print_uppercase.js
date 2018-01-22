var getHTML = require('./http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var uppercaseHTML = html.toUpperCase();
  console.log(html.toUpperCase())
  /* Write your code here! */

}

getHTML(requestOptions, printUpperCase);

