import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow mb-6">
        <div className="max-w-4xl mx-auto px-4 py-3 flex gap-4 items-center">
          <Link to="/dashboard" className="text-indigo-600 font-semibold text-lg">SentiMate</Link>
          <Link className="text-gray-600 hover:text-indigo-600" to="/dashboard">Dashboard</Link>
          <Link className="text-gray-600 hover:text-indigo-600" to="/journal">Journal</Link>
          <Link className="text-gray-600 hover:text-indigo-600" to="/chat">Chat</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
