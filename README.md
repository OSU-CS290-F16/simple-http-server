# Simple Node HTTP Server

This repo contains a simple HTTP server that uses Node.js's `http` module.  The server simply serves the contents of `index.html` no matter what URL was requested from it.

To start the server, you can use `npm`:
```
npm start
```
By default, this will start a server listening on port 3000, and you can visit the server by going to [http://localhost.com:3000](http://localhost:3000).  You can run on a different port by setting the `PORT` environment variable, e.g.:
```
PORT=8000 npm start
```
