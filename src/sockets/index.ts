import { saveMessage } from '../services/dbService';
import { Server as SocketIOServer } from 'socket.io';

export const initializeSocket = (io: SocketIOServer) => {
  io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('message', async (data) => {
      try {
        const message = await saveMessage(data);
        io.emit('message', message);
      } catch (error) {
        socket.emit('error', 'error while saving message');
        console.error(error);
      }
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};
