
export default function ChatMessage({message}) {

    const isuser = message.sender === 'user'
  return (
    <div className={`flex ${isuser? 'justify-end' : 'justify-start'}`}>
        <div
            className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm ${isuser ? 'bg-blue-500 text-white rounded-br-sm' : 'bg-gray-200 text-gray-900 rounded-bl-sm'}`}
        >
            {message.text}
        </div>
      
    </div>
  )
}
