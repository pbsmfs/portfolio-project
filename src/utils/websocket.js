import { io } from 'socket.io-client';

class WebSocketService {
  constructor() {
    this.socket = null;
    this.callbacks = {};
  }

  connect(url) {
    this.socket = io(url, {
      withCredentials: true,
      transports: ['websocket', 'polling']
    });

    this.socket.on('connect', () => {
      console.log('WebSocket connected');
      this.socket.emit('getCount');
    });

    this.socket.on('disconnect', () => {
      console.log('WebSocket disconnected');
    });

    this.socket.on('updateCount', (count) => {
      if (this.callbacks['updateCount']) {
        this.callbacks['updateCount'](count);
      }
    });
  }

  registerCallback(eventName, callback) {
    this.callbacks[eventName] = callback;
  }

  sendNewMessage() {
    if (this.socket && this.socket.connected) {
      this.socket.emit('newMessage');
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export const webSocketService = new WebSocketService();