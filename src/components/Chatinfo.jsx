function Chatinfo() {
  return (
    <div className="relative z-10 container mx-auto px-4 py-12">
      <header className="mb-16 text-center backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-gray-800/50 shadow-2xl">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text animate-shimmer">
          ChatBot
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Welcome to this demo site with a cutting-edge glassmorphic chatbot interface!
        </p>
      </header>

      <main className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-gray-800/50 shadow-2xl mb-20">
        <p className="text-lg mb-6 text-gray-300">
          This is the main content of the website. The chatbot icon is fixed at the bottom-right corner.
        </p>
        <p className="text-lg text-gray-300 mb-4">Click on the chat icon to open the sophisticated chat window.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="backdrop-blur-md bg-gray-900/40 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 rounded-full bg-gray-900/80 flex items-center justify-center">
                  <span className="text-cyan-400">0{item}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Feature {item}</h3>
              <p className="text-gray-400">
                This is a sample feature description for your glassmorphic interface design.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Chatinfo
