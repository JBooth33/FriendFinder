//Dependencies
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;