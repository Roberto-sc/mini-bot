import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";


export default function ChatWindow({messages}) {

  const bottonRef = useRef(null)


  useEffect(() => {
    bottonRef.current?.scrollIntoView({behavior:"smooth"})
  },[messages])


  return (
    <div className="flex flex-col h-96 border rounded-lg p-4 bg-white shadow mb-2">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg}/>
        ))}
        <div ref={bottonRef}/>
      </div>
    </div>
  );
}
