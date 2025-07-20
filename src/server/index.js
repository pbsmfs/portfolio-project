require('dotenv').config({ path: require('find-config')('.env') });

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: process.env.REACT_APP_CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true
  }
});
const bodyParser = require('body-parser');
const knexConfig = require('./db/knexfile'); 
const knex = require('knex')(knexConfig); 

// Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.REACT_APP_CLIENT_URL);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use(bodyParser.json());

let messageCount = 0;

async function initializeMessageCount() {
  try {
    const result = await knex('messages').count('* as count').first();
    messageCount = result.count;
    console.log(`Initialized message count from DB: ${messageCount}`);
  } catch (error) {
    console.error('Error initializing message count:', error);
  }
}

initializeMessageCount();

// WebSocket соединения
io.on('connection', (socket) => {
  console.log('New client connected');
  
  // Отправляем текущий счетчик при подключении
  socket.emit('updateCount', messageCount);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Маршрут для сохранения сообщений
app.post('/api/messages', async (req, res) => {
  try {
    const { from_name, from_email, user_subject, message } = req.body;
    
    // Валидация данных
    if (!from_name || !from_email || !user_subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Вставка данных в базу
    const [newMessage] = await knex('messages').insert({
      name: from_name,
      email: from_email,
      subject: user_subject,
      message: message,
      date: new Date()
    }).returning('*');
    
    // Обновляем счетчик из базы данных
    const result = await knex('messages').count('* as count').first();
    messageCount = result.count;
    
    // Отправляем обновленный счетчик всем клиентам
    io.emit('updateCount', messageCount);
    
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// Маршрут для получения количества сообщений
app.get('/api/messages/count', async (req, res) => {
  try {
    const result = await knex('messages').count('* as count').first();
    res.json({ count: result.count });
  } catch (error) {
    console.error('Error getting message count:', error);
    res.status(500).json({ error: 'Failed to get message count' });
  }
});

const PORT = process.env.REACT_APP_WS_URL.split(':').slice(-1)[0];
http.listen(PORT, () => {
  console.log(`Server running on ${process.env.REACT_APP_WS_URL}`);
});