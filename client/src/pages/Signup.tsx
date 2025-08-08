import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call API
    navigate('/login');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input className="border p-2" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
        <input className="border p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="border p-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="bg-green-500 text-white p-2" type="submit">Create Account</button>
      </form>
      <p className="mt-2 text-sm">Have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
    </div>
  );
}
