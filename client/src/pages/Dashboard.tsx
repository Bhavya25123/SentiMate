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
    <div className="p-4">
      <h2 className="text-xl mb-4">Dashboard</h2>
      <form onSubmit={handleMood} className="flex gap-2 mb-4">
        <input className="border p-2" placeholder="How are you feeling?" value={mood} onChange={e=>setMood(e.target.value)} />
        <button className="bg-green-500 text-white px-4" type="submit">Log</button>
      </form>
      <div className="flex gap-4">
        <Link className="text-blue-500" to="/journal">Journal</Link>
        <Link className="text-blue-500" to="/chat">I Need Support</Link>
      </div>
    </div>
  );
}
