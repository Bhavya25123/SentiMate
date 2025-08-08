import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [mood, setMood] = useState('');

  const handleMood = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call API
    setMood('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <form onSubmit={handleMood} className="flex gap-2 mb-6">
        <input
          className="border rounded p-2 flex-1"
          placeholder="How are you feeling?"
          value={mood}
          onChange={e => setMood(e.target.value)}
        />
        <button className="bg-green-500 text-white px-4 rounded" type="submit">Log</button>
      </form>
      <div className="grid grid-cols-2 gap-4">
        <Link className="p-4 bg-white shadow rounded text-center hover:bg-gray-50" to="/journal">Journal</Link>
        <Link className="p-4 bg-white shadow rounded text-center hover:bg-gray-50" to="/chat">I Need Support</Link>
      </div>
    </div>
  );
}
