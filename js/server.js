var http = require('http');
var url = require("url");
var express = require('express');
var bodyParser = require('body-parser');


var r = express.Router();

function start(route) {
	  function onRequest(request, response) {
	    console.log("Request received.");
	    var pathname = url.parse(request.url).pathname;
	    console.log("Request for " + pathname + " received.");
	    
	    route(pathname, response);
	    
	  }

	  http.createServer(onRequest).listen(8888);
	  console.log("Server has started.");
	}

function start2() {
	
}

exports.start = start;
exports.start2 = start2;