// server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let messageCount = 0;

// Serve static files if needed
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a user connected');
  
  // Send current count to new client
  socket.emit('updateCount', messageCount);
  
  // Handle new messages
  socket.on('newMessage', () => {
    messageCount++;
    // Broadcast updated count to all clients
    io.emit('updateCount', messageCount);
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 4000;
http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});