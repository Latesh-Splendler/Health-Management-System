import { useEffect, useState } from 'react';

export default function EnrollForm() {
  const [clients, setClients] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedPrograms, setSelectedPrograms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/clients')
      .then(res => res.json()).then(setClients);
    fetch('http://localhost:5000/api/programs')
      .then(res => res.json()).then(setPrograms);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/enroll`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientId: selectedClient, programIds: selectedPrograms }),
    });
    alert('Client enrolled successfully!');
  };

  const handleProgramToggle = (programId) => {
    setSelectedPrograms(prev =>
      prev.includes(programId) ? prev.filter(id => id !== programId) : [...prev, programId]
    );
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Enroll Client in Program(s)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select className="w-full border p-2 rounded" required
          onChange={e => setSelectedClient(e.target.value)} value={selectedClient}>
          <option value="">Select Client</option>
          {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <div className="space-y-2">
          {programs.map(p => (
            <label key={p.id} className="flex items-center space-x-2">
              <input type="checkbox" value={p.id}
                checked={selectedPrograms.includes(p.id)}
                onChange={() => handleProgramToggle(p.id)} />
              <span>{p.name}</span>
            </label>
          ))}
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded" type="submit">Enroll</button>
      </form>
    </div>
  );
}
