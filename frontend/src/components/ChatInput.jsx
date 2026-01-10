import { useState } from "react"

export default function ChatInput({onSend}) {


    const [message,setMessage]= useState('')

    const handleSumit = () => {
        if(!message.trim()) return;
        onSend(message)
        setMessage('')
    }
  return (
    <div className="flex gap-2 mt2">
      <input 
        className="flex-1 border rounded-2xl px-3 py-2"
        placeholder="Escribe su mensaje..."
        value={message}
        onChange={e=> setMessage(e.target.value)}
        type="text" 
        onKeyDown={e => e.key === 'Enter' && handleSumit()}
     />
     <button
        onClick={handleSumit}
        className="bg-blue-600 text-white px-4 rounded-2xl"
     >
        Enviar
     </button>

    
    </div>
  )
}
