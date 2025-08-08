import { useState } from 'react';

export default function Journal() {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call API
    setText('');
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Journal Entry</h2>
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
