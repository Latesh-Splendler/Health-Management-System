import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Health System Dashboard</h1>
      <ul className="space-y-2">
        <li><Link className="text-blue-600 underline" to="/register-client">Register Client</Link></li>
        <li><Link className="text-blue-600 underline" to="/create-program">Create Health Program</Link></li>
        <li><Link className="text-blue-600 underline" to="/enroll-client">Enroll Client</Link></li>
        <li><Link className="text-blue-600 underline" to="/search">Search Client</Link></li>
      </ul>
    </div>
  );
}
