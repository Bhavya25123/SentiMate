import { useState } from 'react';
import { api } from '../api';

export default function Journal() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api('/journal', {
        method: 'POST',
        body: JSON.stringify({ text }),
      });
      setText('');
      setMessage('Entry saved!');
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to save entry';
      setMessage(msg);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Journal Entry</h2>
      {message && <p className="text-sm mb-2">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          className="border rounded p-2"
          rows={6}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className="bg-indigo-600 text-white py-2 rounded" type="submit">Save</button>
      </form>
    </div>
  );
}
