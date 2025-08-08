import { useState } from 'react';

export default function Journal() {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call API
    setText('');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl mb-4">Journal Entry</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <textarea className="border p-2" rows={6} value={text} onChange={e=>setText(e.target.value)} />
        <button className="bg-blue-500 text-white p-2" type="submit">Save</button>
      </form>
    </div>
  );
}
