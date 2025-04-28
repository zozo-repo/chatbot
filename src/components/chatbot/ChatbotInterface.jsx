"use client"

// src/components/chatbot/ChatbotInterface.jsx
import { useState } from "react"
import ChatMessage from "./ChatMessage"

// This is just a placeholder component to demonstrate the UI
// No actual chatbot functionality is implemented as per requirements
const ChatbotInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm the LKCTC Assistant. How can I help you with information about our college?",
      isBot: true,
    },
    {
      id: 2,
      text: "I can answer questions about courses, fees, admission process, placements, and campus facilities.",
      isBot: true,
    },
  ])
  const [inputText, setInputText] = useState("")

  // This would normally connect to a real chatbot service
  // Here it's just for demonstration purposes
  const handleSendMessage = (e) => {
    e.preventDefault()

    if (!inputText.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
    }

    setMessages([...messages, userMessage])
    setInputText("")

    // Example placeholder response (in a real implementation, this would come from a backend)
    setTimeout(() => {
      const botResponses = {
        courses:
          "We offer various engineering courses including Computer Science, Mechanical, Electrical, Civil, and Electronics & Communication Engineering.",
        fees: "The fee structure varies by program. For B.Tech programs, the average annual fee is approximately ₹85,000 to ₹95,000.",
        admission:
          "Admissions are based on merit in entrance exams like JEE/State CET or direct admission through the management quota.",
        placements:
          "Our placement cell has ties with over 100 companies. Last year we achieved 85% placement with average package of 6 LPA.",
        facilities:
          "Our campus features modern labs, a digital library, sports facilities, hostel accommodation, and Wi-Fi throughout the campus.",
        faculty: "We have highly qualified faculty members with PhD and industry experience across all departments.",
      }

      // Simple keyword matching for demo
      let botReply =
        "I'm here to help with information about Lyallpur Khalsa College Technical Campus. Could you ask about courses, fees, admission process, placements, or campus facilities?"

      const userQuery = inputText.toLowerCase()
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (userQuery.includes(keyword)) {
          botReply = response
          break
        }
      }

      const botMessage = {
        id: messages.length + 2,
        text: botReply,
        isBot: true,
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="border-t border-glassHighlight p-3 flex">
        <input
          type="text"
          placeholder="Ask about courses, admissions, fees..."
          className="flex-1 bg-darkBg-lighter border border-glassHighlight rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 p-2 rounded-lg bg-gradient-to-r from-secondary to-primary text-white"
          disabled={!inputText.trim()}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </>
  )
}

export default ChatbotInterface
