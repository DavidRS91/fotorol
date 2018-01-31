const express = require('express')
const colors = require('colors')


// When we 'require' express, we get a function that generates an instance of an express app. This app will be used to build a web server
const app = express();

// app.use is similar  to app.get, but it works for all http verbs.

//When a path is not specified for app.get or app.use, it will match for all routes
app.use((request, response, next) => {
  console.log(
    "Request method: ",request.method.red.bold, ", Request path: ", request.path.red.bold, ", Request time: ",new Date().toString().red.bold
  );
  // The "next" (3rd) arg in the function, is the arg that tells express to
  // move to the next middleware section inline when it is called.

  // If you forget to call next, the client will never get a response back,
  // which means it will keep on waiting until it times out.
  next();
});

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
