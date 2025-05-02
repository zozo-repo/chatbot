"use client"

import { useRef, useEffect } from "react"
import { useChatbot } from "./context/ChatbotContext"

function ChatbotWidget() {
  const {
    isOpen,
    messages,
    inputValue,
    isTyping,
    maximized,
    showChatAnimation,
    toggleChat,
    toggleMaximize,
    handleInputChange,
    handleSendMessage,
  } = useChatbot()

  const messagesEndRef = useRef(null)

  // Auto-scroll to the bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div
          className={`chatbot-window backdrop-blur-md bg-gray-900/60 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-500 ease-in-out ${
            maximized ? "w-full md:w-3/4 lg:w-1/2 h-3/4" : "w-80 md:w-96 h-96 md:h-112"
          } ${showChatAnimation ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{
            boxShadow: "0 25px 50px -12px rgba(8, 145, 178, 0.25), 0 15px 30px -15px rgba(139, 92, 246, 0.3)",
          }}
        >
          <div className="chatbot-header px-4 py-3 bg-gradient-to-r from-cyan-900/70 to-purple-900/70 border-b border-gray-700/50 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center p-1">
                <div className="w-6 h-6 rounded-full bg-gray-900/80 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </div>
              </div>
              <h3 className="font-medium text-lg bg-gradient-to-r from-cyan-300 to-purple-300 text-transparent bg-clip-text">
                LKCTC Assistant
              </h3>
            </div>
            <div className="flex space-x-2">
              <button
                className="w-6 h-6 rounded-full bg-gray-800/70 hover:bg-gray-700/70 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                onClick={toggleMaximize}
                aria-label={maximized ? "Minimize chat" : "Maximize chat"}
              >
                {maximized ? (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.5 3.5v9h9v-9h-9zM11 11H5V5h6v6z" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1.5 1.5v13h13v-13h-13zM13 13H3V3h10v10z" />
                  </svg>
                )}
              </button>
              <button
                className="w-6 h-6 rounded-full bg-gray-800/70 hover:bg-red-900/70 flex items-center justify-center text-gray-300 hover:text-red-300 transition-colors"
                onClick={toggleChat}
                aria-label="Close chat"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="messages-container flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message flex ${message.sender === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-3/4 rounded-2xl px-4 py-2 shadow ${
                    message.sender === "bot"
                      ? "bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 border border-cyan-700/30"
                      : "bg-gradient-to-br from-purple-900/40 to-purple-800/40 border border-purple-700/30"
                  }`}
                >
                  <div className="text-sm">{message.text}</div>
                  <div
                    className={`text-xs mt-1 ${message.sender === "bot" ? "text-cyan-400/70" : "text-purple-300/70"}`}
                  >
                    {message.timestamp || "Just now"}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message flex justify-start">
                <div className="max-w-3/4 rounded-2xl px-4 py-2 bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 border border-cyan-700/30 shadow">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-typing1"></div>
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-typing2"></div>
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-typing3"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            className="input-form p-3 bg-gray-900/70 border-t border-gray-700/50 flex space-x-2"
            onSubmit={handleSendMessage}
          >
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="message-input flex-grow py-2 px-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600/50 focus:border-transparent"
            />
            <button
              type="submit"
              className="send-button p-2 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white transition-colors shadow-lg shadow-purple-600/20 flex items-center justify-center"
              disabled={inputValue.trim() === ""}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        className={`chat-icon w-14 h-14 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 ${
          isOpen ? "rotate-90 scale-95" : "hover:scale-110"
        }`}
        onClick={toggleChat}
        aria-label="Toggle chat"
        style={{
          boxShadow: isOpen
            ? "0 10px 25px -5px rgba(139, 92, 246, 0.5)"
            : "0 20px 25px -5px rgba(8, 145, 178, 0.5), 0 10px 10px -5px rgba(139, 92, 246, 0.4)",
        }}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

export default ChatbotWidget
