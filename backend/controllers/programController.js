const db = require('../db');


const createProgram = (req, res) => {
  const { name } = req.body;
  db.run(`INSERT INTO programs (name) VALUES (?)`, [name], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID, name });
  });
};


const getAllPrograms = (req, res) => {
  db.all(`SELECT * FROM programs`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

module.exports = { createProgram, getAllPrograms };
