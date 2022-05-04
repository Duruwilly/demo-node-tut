// HTTP modules allows us to setup a web server

//first we rrequire http from our http modules
const http = require('http')


// then we create a server which pass in a call back function and the function accept 2 method, request and result i.e the request our client is requesting from our web page and the result to give back to our client after requesting and the res take in a method which is write where we pass in the message to our client. then we end it

// this method is saying is a user is requesting to check the url of the home or about or any page that exist in a web browser page, then we end it with a res note or else, if none of the request the user is searching for exist in the browser, then we end it with a error note
const server = http.createServer((req, res) => {
 if (req.url === '/') {
  res.end('welcome to our home page')
 }
 if(req.url === '/about') {
  res.end('a short history about us')
 }
 res.end(`
 <h1>Oops!</h1>
 <p>we dont seem to find the page your are looking for</p>
 <a href='/'>back to home</a>
 `)
})

// this is the port in which to make our server to be on
server.listen(5000)