const db = require('../db');

const createClient = (req, res) => {
  const { name, age, gender } = req.body;
  db.run(`INSERT INTO clients (name, age, gender) VALUES (?, ?, ?)`, [name, age, gender], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID, name, age, gender });
  });
};

const getAllClients = (req, res) => {
  db.all(`SELECT * FROM clients`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

const getClientById = (req, res) => {
  const { id } = req.params;
  db.get(`SELECT * FROM clients WHERE id = ?`, [id], (err, client) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    db.all(
      `SELECT p.name FROM programs p
       JOIN enrollments e ON p.id = e.program_id
       WHERE e.client_id = ?`,
      [id],
      (err2, programs) => {
        if (err2) {
          return res.status(500).json({ error: err2.message });
        }
        res.json({ ...client, programs: programs.map(p => p.name) });
      }
    );
  });
};

module.exports = { createClient, getAllClients, getClientById };
