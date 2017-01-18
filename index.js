/**
 * This is the main file of the application. 
 */ 
 
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

var express = require('express');

// Create a new express.js web app:

var app = express();


// Configure express with the settings found in
// our config.js file

require('./config')(app);


// Add the routes that the app will react to,
// as defined in our routes.js file

require('./routes')(app);

// This file has been called directly with 
// `node index.js`. Start the server!

// start server on the specified port and binding host
app.listen(process.env.PORT||3000);

// print a message when the server starts listening
console.log("server starting");
