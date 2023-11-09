// import db from './dbService';
// import { Message } from '../models/messageModel';
//
// export const getMessages = async (): Promise<Message[]> => {
//   return new Promise((resolve, reject) => {
//     const sql = 'SELECT * FROM messages'; // Assurez-vous que 'messages' est le nom de votre table de messages.
//
//     db.all(sql, [], (err, rows: Message[]) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(rows);
//     });
//   });
// };