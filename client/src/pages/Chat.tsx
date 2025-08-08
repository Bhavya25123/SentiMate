import { useState } from 'react';

type Message = { sender: 'user' | 'bot'; text: string };

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: "I'm here for you." }]);
    setInput('');
  };

  return (
    <div className="p-4 max-w-md mx-auto flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`my-2 ${m.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-2 rounded ${m.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>{m.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex gap-2">
        <input className="border p-2 flex-1" value={input} onChange={e=>setInput(e.target.value)} />
        <button className="bg-blue-500 text-white px-4" type="submit">Send</button>
      </form>
    </div>
  );
}
