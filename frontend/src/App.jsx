import { useState } from "react"
import { sendMessage } from "./services/chatService"
import ChatWindow from "./components/ChatWindow"
import ChatInput from "./components/ChatInput"
function App() {


  const [messages,setMessages] = useState([])

  const handleSend = async (text) => {

    setMessages(prev => [...prev,{sender:'user',text}])

    try{
      const res = await sendMessage(text)
      setMessages(prev => [...prev,{sender:'bot',text:res.response}])

    }catch{
      setMessages(prev => [...prev,{sender:'bot',text:'Error del servidor'}])
    }

    console.log(messages)
  }

  return (
    <>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-4 rounded-xl shadow-lg">
          <h1 className="text-center font-semibold mb-3"> Mini Chatbot Conversacional</h1>
          <ChatWindow messages={messages}/>
          <ChatInput onSend={handleSend}/>
        </div>
      </div>
    </>
  )
}

export default App
