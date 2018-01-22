var getHTML = require('./http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  // var lowercaseHTML = html.toLowerCase();
  console.log(html.toLowerCase())
  /* Write your code here! */

}

getHTML(requestOptions, printLowerCase);

