//Patrick Kliesner
//CIS 526
//1/26/17


"use strict";

/**
 * server.js
 * This file defines the server for a
 * simple photo gallery web app.
 */
 
 //Load the http code module and puts it in var http
 var http = require("http");
 //Loads in the node File System
 var fs = require("fs");
 var port = 3000;
 
 
 function serveImage(filename, req, res){
	//Reads in and stores contens of file to body var
	var body = fs.readFile("images/" + filename, function(err, body){
		if(err) { //If there is any error at all
			console.error(err);
			res.statusCode = 500;
			res.statusMessage = "Server error"
			res.end("Silly me");
			return;
		}
		res.setHeader("Content-Type", "image/jpeg");
		res.end(body);
	});
 }

//Needs a parameter function to handle requests. Request/Response
 var server = http.createServer(function(req, res) {
	 
	 switch(req.url){
		case "/chess":
			serveImage('chess.jpg', req, res);
			break;
		case "/fern":
		case "/fern/":
		case "/fern":
			serveImage('fern.jpg', req, res);
			break;
		default:
			res.statusCode = 404;
			res.statusMessage = "Not found";
			res.end();
	 }
	 
	 
 });
 
 //Tell it what port to listen to. 80 is normal
 server.listen(port, function() {
	 console.log("Listening on Port " + port);
 });