const express = require('express');
const socketIO = require('socket.io');
const https = require('https');
const fs = require('fs');

const app = express();
const server = https.createServer({
  key: fs.readFileSync('path/to/privateKey.pem'),
  cert: fs.readFileSync('path/to/certificate.pem')
}, app);

const io = socketIO(server);

// Store the connected clients
let clients = [];

// Handle a new client connection
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
  
  // Add the client to the list of connected clients
  clients.push(socket);
  
  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
    
    // Remove the client from the list of connected clients
    clients = clients.filter(client => client.id !== socket.id);
  });
  
  // Handle receiving a question from the client
  socket.on('question', (question) => {
    console.log('Question received from client:', socket.id);
    
    // Broadcast the question to all other connected clients
    socket.broadcast.emit('question', question);
  });
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Socket.IO server listening on port ${port}`);
});
