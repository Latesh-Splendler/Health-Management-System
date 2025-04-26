import { useState } from 'react';


export default function ClientForm() {
  const [client, setClient] = useState({ name: '', age: '', gender: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client),
    });
    alert('Client registered!');
    setClient({ name: '', age: '', gender: '' });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register New Client</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" value={client.name}
          onChange={e => setClient({ ...client, name: e.target.value })}
          className="w-full border p-2 rounded" required />
        <input type="number" placeholder="Age" value={client.age}
          onChange={e => setClient({ ...client, age: e.target.value })}
          className="w-full border p-2 rounded" required />
        <select value={client.gender}
          onChange={e => setClient({ ...client, gender: e.target.value })}
          className="w-full border p-2 rounded" required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Register</button>
      </form>
    </div>
  );
}
