const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000", // Разрешаем подключение с этого адреса
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Дополнительные CORS заголовки для обычных HTTP запросов
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

let messageCount = 0;

io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.emit('updateCount', messageCount);
  
  socket.on('newMessage', () => {
    messageCount++;
    io.emit('updateCount', messageCount);
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = 4000;
http.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});