import { useState } from 'react';
import { api } from '../api';

type Message = { sender: 'user' | 'bot'; text: string };

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    const userMessage = input;
    setMessages([...messages, { sender: 'user', text: userMessage }]);
    setInput('');
    try {
      const data = await api('/chat', {
        method: 'POST',
        body: JSON.stringify({ message: userMessage }),
      });
      setMessages(prev => [...prev, { sender: 'bot', text: data.response }]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error sending message';
      setMessages(prev => [...prev, { sender: 'bot', text: msg }]);
    }
  };

  return (
    <div className="max-w-md mx-auto h-[80vh] flex flex-col bg-white shadow rounded">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div key={i} className={`my-2 ${m.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span
              className={`inline-block px-3 py-2 rounded ${m.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="p-4 flex gap-2 border-t">
        <input className="border rounded p-2 flex-1" value={input} onChange={e => setInput(e.target.value)} />
        <button className="bg-indigo-600 text-white px-4 rounded" type="submit">Send</button>
      </form>
    </div>
  );
}
