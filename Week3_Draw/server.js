// We need the file system here
var fs = require('fs');
				
// Express is a node module for building HTTP servers
var express = require('express');
var app = express();

// Tell Express to look in the "public" folder for any files first
app.use(express.static('public'));

// If the user just goes to the "route" / then run this function
app.get('/', function (req, res) {
  res.send('Hello World!')
});

// Here is the actual HTTP server 
// In this case, HTTPS (secure) server
var https = require('https');

// Security options - key and certificate
var options = {
  key: fs.readFileSync('privkey1.pem'),
  cert: fs.readFileSync('cert1.pem')
};

// We pass in the Express object and the options object
var httpServer = https.createServer(options, app);

// Default HTTPS port
httpServer.listen(443);

// WebSocket Portion
// WebSockets work with the HTTP server
// Using Socket.io
const { Server } = require('socket.io');
const io = new Server(httpServer, {});

// Old version of Socket.io
//var io = require('socket.io').listen(httpServer);

let users = {};

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection', 
	// We are given a websocket object in our function
	function (socket) {
	
        users[socket.id] = socket;

		socket.on('connect', function() {
			// console.log(socket.io.engine.id);     // old ID
			// socket.io.engine.id = 'username';
			// console.log(socket.io.engine.id);     // new ID
		});
		console.log("We have a new client: " + socket.id);
		
        socket.on('mouse', function(data) {
            io.sockets.emit('mouse', data);
        });

		
		socket.on('disconnect', function() {
			console.log("Client has disconnected " + socket.id);
		});
	}
);