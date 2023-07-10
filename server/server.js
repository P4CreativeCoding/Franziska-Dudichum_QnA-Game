const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
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

// Start the server
const port = 4000; // Change to the desired port numbers
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
