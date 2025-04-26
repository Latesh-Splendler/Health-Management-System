import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ClientProfile() {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/clients/${id}`)
      .then(res => res.json()).then(setClient);
  }, [id]);

  if (!client) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Client Profile</h2>
      <p><strong>Name:</strong> {client.name}</p>
      <p><strong>Age:</strong> {client.age}</p>
      <p><strong>Gender:</strong> {client.gender}</p>
      <p className="mt-4 font-semibold">Enrolled Programs:</p>
      <ul className="list-disc ml-6">
        {client.programs.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
