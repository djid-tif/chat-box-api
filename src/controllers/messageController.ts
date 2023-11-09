// controllers/MessageController.ts
import { Request, Response } from 'express';
import { getMessages} from '../services/dbService';

export class MessageController {
  // La méthode pour récupérer les messages
  public async getMessages(req: Request, res: Response): Promise<void> {
    try {
      const messages = await getMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des messages" });
    }
  }
}
