const { open } = require('sqlite');
const sql3 = require('sqlite3');

module.exports = () => open({
  filename: './src/db/rocketq.sqlite',
  driver: sql3.Database
});
