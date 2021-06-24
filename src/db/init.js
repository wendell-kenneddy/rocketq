const startDb = require('./config');

const init = async () => {
  const db = await startDb();

  await db.exec(`CREATE TABLE rooms (
    id INTEGER PRIMARY KEY,
    pass TEXT
  );`);

  await db.exec(`CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT,
    is_checked INT
  );`)

  await db.close();
};

init();
