

export default function ChatWindow({messages}) {
  return (
    <div className="flex flex-col h-96 border rounded-lg p-4 bg-white shadow">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded max-w-xs ${
              msg.sender === 'user'
                ? 'bg-blue-500 text-white self-end'
                : 'bg-gray-200 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}
