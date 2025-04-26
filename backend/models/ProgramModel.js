const db = require('../db');

db.run(`
  CREATE TABLE IF NOT EXISTS programs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )
`);

const insertProgram = (program, callback) => {
  const { name } = program;
  db.run(`INSERT INTO programs (name) VALUES (?)`, [name], function(err) {
    callback(err, this?.lastID);
  });
};

module.exports = { insertProgram };
