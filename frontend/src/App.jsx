import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ClientForm from './components/ClientForm';
import ProgramForm from './components/ProgramForm';
import EnrollForm from './components/EnrollForm';
import SearchClient from './components/SearchClient';
import ClientProfile from './components/ClientProfile';

export default function App() {
  return (
    <Router>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register-client" element={<ClientForm />} />
          <Route path="/create-program" element={<ProgramForm />} />
          <Route path="/enroll-client" element={<EnrollForm />} />
          <Route path="/search" element={<SearchClient />} />
          <Route path="/client/:id" element={<ClientProfile />} />
        </Routes>
      </div>
    </Router>
  );
}
