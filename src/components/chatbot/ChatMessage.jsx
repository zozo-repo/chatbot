const ChatMessage = ({ message }) => {
  const { text, isBot } = message

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-3/4 p-3 rounded-xl ${
          isBot
            ? "bg-darkBg-lighter border border-glassHighlight text-white"
            : "bg-gradient-to-r from-secondary to-primary text-white"
        }`}
      >
        {text}
      </div>
    </div>
  )
}

export default ChatMessage
