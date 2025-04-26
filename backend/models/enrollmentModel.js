const db = require('../db');

db.run(`
  CREATE TABLE IF NOT EXISTS enrollments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id INTEGER,
    program_id INTEGER,
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (program_id) REFERENCES programs(id)
  )
`);

const enrollClient = ({ clientId, programId }, callback) => {
  db.run(`INSERT INTO enrollments (client_id, program_id) VALUES (?, ?)`, [clientId, programId], callback);
};

const getProgramsByClientId = (clientId, callback) => {
  db.all(`
    SELECT programs.name FROM programs
    JOIN enrollments ON programs.id = enrollments.program_id
    WHERE enrollments.client_id = ?
  `, [clientId], callback);
};

module.exports = { enrollClient, getProgramsByClientId };
