import { useState } from 'react';

export default function ProgramForm() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/programs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    alert('Program created!');
    setName('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Health Program</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Program Name" value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border p-2 rounded" required />
        <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">Create</button>
      </form>
    </div>
  );
}
