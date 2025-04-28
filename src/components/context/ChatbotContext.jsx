"use client"

import { createContext, useState, useContext } from "react"

// Create the context
export const ChatbotContext = createContext()

// Custom hook to use the chatbot context
export const useChatbot = () => useContext(ChatbotContext)

// Provider component
export const ChatbotProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm the LKCTC Assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [maximized, setMaximized] = useState(false)
  const [showChatAnimation, setShowChatAnimation] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setShowChatAnimation(false)
      setTimeout(() => setShowChatAnimation(true), 100)
    }
  }

  const toggleMaximize = () => {
    setMaximized(!maximized)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault()

    if (inputValue.trim() === "") return

    // Add user message
    const newUserMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newUserMessage])
    const userQuery = inputValue
    setInputValue("")
    setIsTyping(true)

    try {
      // Call the API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            ...messages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
            { role: "user", content: userQuery },
          ],
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response from chatbot")
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let botResponse = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split("\n")

        for (const line of lines) {
          if (line.startsWith("data: ") && line !== "data: [DONE]") {
            try {
              const data = JSON.parse(line.substring(6))
              if (data.type === "text" && data.value) {
                botResponse += data.value

                // Update the message in real-time
                setMessages((prevMessages) => {
                  const lastMessage = prevMessages.find((msg) => msg.id === "bot-typing")

                  if (lastMessage) {
                    return prevMessages.map((msg) => (msg.id === "bot-typing" ? { ...msg, text: botResponse } : msg))
                  } else {
                    return [
                      ...prevMessages,
                      {
                        id: "bot-typing",
                        text: botResponse,
                        sender: "bot",
                        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                      },
                    ]
                  }
                })
              }
            } catch (e) {
              console.error("Error parsing JSON:", e)
            }
          }
        }
      }

      // Finalize the message with a permanent ID
      setMessages((prevMessages) => {
        return prevMessages.map((msg) => (msg.id === "bot-typing" ? { ...msg, id: Date.now() } : msg))
      })
    } catch (error) {
      console.error("Error:", error)

      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <ChatbotContext.Provider
      value={{
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
        setMessages,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  )
}
