/*
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('A user connected.');
  socket.on('join', username => {
    console.log(`${username} joined the game.`);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  });
});

const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
*/

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = socketIo(server);

/*
const connectSocket = io(process.env.REACT_APP_SERVER, {
    query: {
      username: "user1",
      password: "password1"
    }
  }); 
  */