import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SearchClient() {
  const [query, setQuery] = useState('');
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/clients')
      .then(res => res.json()).then(setClients);
  }, []);

  const filtered = clients.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Search Client</h2>
      <input type="text" className="w-full border p-2 rounded mb-4"
        placeholder="Enter client name..." value={query}
        onChange={e => setQuery(e.target.value)} />
      <ul className="space-y-2">
        {filtered.map(client => (
          <li key={client.id}>
            <Link className="text-blue-600 underline" to={`/client/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
