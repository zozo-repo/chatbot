"use client"

// src/components/chatbot/ChatbotContainer.jsx
import { useState } from "react"
import GlassMorphicContainer from "../common/GlassMorphicContainer"
import ChatbotInterface from "./ChatbotInterface"

const ChatbotContainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chatbot Trigger Button */}
      <button
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full transition-all duration-300 
          ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}
          bg-gradient-to-r from-secondary to-primary text-white shadow-lg hover:shadow-xl
          flex items-center justify-center cyan-glow`}
        onClick={() => setIsOpen(true)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Chatbot Interface */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-full max-w-sm transition-all duration-500 transform
          ${isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"}`}
      >
        <GlassMorphicContainer className="p-0 overflow-hidden" glow="dual" borderGradient={true}>
          <div className="flex flex-col h-96">
            {/* Chatbot Header */}
            <div className="bg-gradient-to-r from-secondary to-primary p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1 mr-3">
                  <img src="/logo.png" alt="Chatbot" className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-medium text-white">LKCTC Assistant</h3>
                  <p className="text-xs text-gray-100 opacity-80">Ask me anything about the college</p>
                </div>
              </div>
              <button className="text-white hover:bg-white/10 rounded-full p-1" onClick={() => setIsOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chatbot Body */}
            <ChatbotInterface />
          </div>
        </GlassMorphicContainer>
      </div>
    </>
  )
}

export default ChatbotContainer
