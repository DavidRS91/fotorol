const express = require('express')


// When we 'require' express, we get a function that generates an instance of an express app. This app will be used to build a web server
const app = express();

// app.get('urlPath', function callback (request,response))
// URL http://www.example.com/home
//           |Domain         |Path
// app.get requires two args:
    // 1. a path to match
    // 2. a callback function that takes two args
      // 2.1. request arg is an object that contains info from the client. It is composed
      //      of an http header, and possibly a body that holds data. This represents
      //      what the client is asking of the server.
      // 2.2. response arg is an object that will hold the servers reply to the client. It will
      //      contain an http header, and possible a body that would hold data such as an HTML page.

app.get('/home', (request,response) => {
  response.send('Welcome Home Bawby!') //sends text back to the browser
});

app.get('/home2', (request,response) => {
  response.send('Welcome to your second home!') //sends TEXT (always sends text) back to the browser
});


const DOMAIN = 'localhost';
const PORT = 3002;

// Use app.listen to start a server

app.listen(PORT,DOMAIN, () => {
  console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});
