import { Router } from 'express';
import { MessageController } from '../controllers/messageController';

const router = Router();
const messageController = new MessageController();

// Définit la route pour obtenir les messages
router.get('/messages', messageController.getMessages);

export default router;