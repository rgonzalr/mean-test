// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'NODE_ENV' variable
console.log(process.env.NODE_ENV);
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV);

// Load the module dependencies
var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

// Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance
var app = express();

// Configure the Passport middleware
var passport = passport();

// Use the Express application instance to listen to the '5000' port
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
	// Log the server status to the console
  console.log('Node app is running on port', app.get('port'));
});

// console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;
