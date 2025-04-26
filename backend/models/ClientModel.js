const db = require('../db');

db.run(`
  CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    gender TEXT
  )
`);

const insertClient = (client, callback) => {
  const { name, age, gender } = client;
  db.run(`INSERT INTO clients (name, age, gender) VALUES (?, ?, ?)`, [name, age, gender], function(err) {
    callback(err, this?.lastID);
  });
};

const getClientById = (id, callback) => {
  db.get(`SELECT * FROM clients WHERE id = ?`, [id], callback);
};

const searchClientsByName = (name, callback) => {
  db.all(`SELECT * FROM clients WHERE name LIKE ?`, [`%${name}%`], callback);
};

module.exports = { insertClient, getClientById, searchClientsByName };
