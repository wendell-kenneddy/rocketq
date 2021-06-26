const startDb = require('../db/config');

module.exports = {
  async get(roomId, isRead) {
    const db = await startDb();

    const questions = await db.all(`SELECT * FROM questions
    WHERE room_id = ${roomId} AND is_checked = ${isRead ? 1 : 0};`);

    const normalizedQuestions = questions.map(question => {
      return {
        id: question.id,
        title: question.title,
        isChecked: question.is_checked,
        roomId: question.room_id
      };
    });

    await db.close();

    return normalizedQuestions;
  },

  async delete(id) {
    const db = await startDb();

    await db.run(`DELETE FROM questions WHERE id = ${id}`);

    await db.close();
  },

  async update(col, value, id) {
    const db = await startDb();

    await db.run(`UPDATE questions SET ${col} = ${value} WHERE id = ${id};`);

    await db.close();
  },

  async create(title, roomId) {
    const db = await startDb();

    await db.run(`INSERT INTO questions (title, is_checked, room_id) VALUES (
      "${title}",
      0,
      ${roomId}
    );`);

    await db.close();
  }
};
