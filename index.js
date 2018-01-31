const express = require('express')


// When we 'require' express, we get a function that generates an instance of an express app. This app will be used to build a web server
const app = express();

// app.get('urlPath', function callback (request,response))
// URL http://www.example.com/home
//           |Domain         |Path
app.get('/home', (request,response) => {
  response.send('Welcome Home!') //sends text back to the browser
});

app.get('/home2', (request,response) => {
  response.send('Welcome to your second home!') //sends TEXT (always sends text) back to the browser
});


const DOMAIN = 'localhost';
const PORT = 3002;

app.listen(PORT,DOMAIN, () => {
  console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});
