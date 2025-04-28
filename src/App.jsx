import { ThemeProvider } from "./components/context/ThemeContext"
import MainLayout from "./components/layout/MainLayout"
import HomePage from "./components/pages/HomePage"
import { ChatbotProvider } from "./components/context/ChatbotContext"

export default function App() {
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-200 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl animate-pulse-slow"></div>
      </div>
      <ThemeProvider>
        <ChatbotProvider>
          <MainLayout>
            <HomePage />
          </MainLayout>
        </ChatbotProvider>
      </ThemeProvider>
    </div>
  )
}
