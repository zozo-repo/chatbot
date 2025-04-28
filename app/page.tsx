import HomePage from "../src/components/pages/HomePage"
import { ChatbotProvider } from "../src/components/context/ChatbotContext"
import ChatbotWidget from "../src/components/ChatbotWidget"

export default function Page() {
  return(
        <ChatbotProvider>
  <HomePage />
   <ChatbotWidget />
        </ChatbotProvider>
  )
}
