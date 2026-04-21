import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('chat.db');

// Initialize tables
export function initDB() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS conversations (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT
    );

    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      conversationId TEXT,
      role TEXT,
      text TEXT,
      createdAt INTEGER
    );
  `);
}

export default db;