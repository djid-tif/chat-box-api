import express from 'express';
import authRoutes from './routes/authRoutes';
import MessageRoutes from './routes/messageRoutes';

const app = express();

app.use(express.json());

// Middleware pour l'authentification si nécessaire
// app.use(authMiddleware);

app.use('/api', MessageRoutes);

// Vous pouvez ajouter d'autres routes ici

export default app;
