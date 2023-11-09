import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import app from './app';
import { initializeSocket } from './sockets';

const server = http.createServer(app);
const io = new SocketIOServer(server);

initializeSocket(io);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});
