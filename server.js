var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 3000;

// Synchronously read the contents of index.html.
var contents = fs.readFileSync('index.html', 'utf8');

/*
 * This is our function to process a single HTTP request.  It logs the URL
 * that was requested and (no matter what the requested URL was), returns
 * the contents of index.html, which were read above.
 */
function handleRequest(request, response) {
  console.log("== Got request for:", request.url);
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.write(contents);
  response.end();
}

// Make a new server and tell it to use our request handling function above.
var server = http.createServer(handleRequest);

// Start the server listening on the specified port.
server.listen(port, function () {
  console.log("== Server listening on port:", port);
});
