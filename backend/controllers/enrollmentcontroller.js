const db = require('../db');


const enrollClient = (req, res) => {
  const { clientId, programId } = req.body;
  db.run(
    `INSERT INTO enrollments (client_id, program_id) VALUES (?, ?)`,
    [clientId, programId],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Enrollment successful!' });
    }
  );
};


const getClientPrograms = (req, res) => {
  const { clientId } = req.params;
  db.all(
    `SELECT p.id, p.name FROM programs p
     JOIN enrollments e ON p.id = e.program_id
     WHERE e.client_id = ?`,
    [clientId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    }
  );
};

module.exports = { enrollClient, getClientPrograms };
