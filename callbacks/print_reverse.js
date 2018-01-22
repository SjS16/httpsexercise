var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
      var newString = "";
    for (var i = html.length - 1; i >= 0; i--) {
        newString += html[i];
    }// var lowercaseHTML = html.toLowerCase();
  console.log(newString);
  /* Write your code here! */

}

getHTML(requestOptions, printReverse);



