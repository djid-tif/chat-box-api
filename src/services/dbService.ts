import { Database } from 'sqlite3';
import { Message } from '../models/messageModel';

const db = new Database('chat.db', (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log('Connected to the SQLite database.');
  db.run("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, content TEXT, sender TEXT, createdAt TEXT)");
});

export const saveMessage = (message: any) => {
  return new Promise((resolve, reject) => {
    const { content, sender } = message;
    const createdAt = new Date().toISOString();

    const sql = `INSERT INTO messages (content, sender, createdAt) VALUES (?, ?, ?)`;
    db.run(sql, [content, sender, createdAt], function(err) {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ...message, id: this.lastID, createdAt });
    });
  });
};

export const getMessages = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM messages'; // Assurez-vous que 'messages' est le nom de votre table de messages.

    db.all(sql, [], (err, rows: Message[]) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
};
