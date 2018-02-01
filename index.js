const express = require('express');
const logger = require('morgan');
const colors = require('colors');
const bodyParser = require('body-parser');


// When we 'require' express, we get a function that generates an instance of an express app. This app will be used to build a web server
const app = express();
app.set('view engine', 'ejs');

app.use(logger("dev"));

app.use(bodyParser.urlencoded({extended:true}));
// This is 'url encoded data': http://localhost:3002/contact_us?fullName=David+Scott&message=Hello%2C+it%27s+me%21%21%21+Is+this+working%3F%0D%0A%0D%0A%0D%0AHelloooo%3F

// app.use is similar  to app.get, but it works for all http verbs.

//When a path is not specified for app.use, it will match for all routes
// app.use((request, response, next) => {
//   console.log(
//     "Request method: ",request.method.red.bold, ", Request path: ", request.path.red.bold, ", Request time: ",new Date().toString().red.bold
//   );
//   // The "next" (3rd) arg in the function, is the arg that tells express to
//   // move to the next middleware section inline when it is called.
//
//   // If you forget to call next, the client will never get a response back,
//   // which means it will keep on waiting until it times out.
//   next();
// });

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

const home = (request,response) => {
  // response.send('Welcome Home Bawby!') //sends text back to the browser

  //The below command will look in the /views directory for a .ejs file titled 'home' and return the content of the .ejs file
  response.render('home')
}

app.get('/home', home);
app.get('/', home);
app.get('/contact_us', (request, response) => {
  console.log(request.query);
  response.render('contact_us')
})

app.post('/contact_us', (request, response) => {
  console.log(request.body);
  const body = request.body;
  const fullName = body.fullName;
  const message = body.message;
  const numbers = [1,2,3,4,5,6]  
  response.render('thank_you', {fullName: fullName, message: message, numbers: numbers})
  // All properties of the object passed as the second arg to response.render will be available inside the rendered template as local variables
  // Data coming in from a form using the post method will be on the propert 'body' of the request
})


const DOMAIN = 'localhost';
const PORT = 3002;

// Use app.listen to start a server

app.listen(PORT,DOMAIN, () => {
  console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});
