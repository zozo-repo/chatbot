import express from "express"
import { createServer as createViteServer } from "vite"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

const __dirname = dirname(fileURLToPath(import.meta.url))

// College information context for the chatbot
const collegeContext = `
You are the AI assistant for Lyallpur Khalsa College Technical Campus (LKCTC), a premier technical institution in Punjab, India.

About LKCTC:
- Founded over 30 years ago
- Located in Jalandhar, Punjab, India
- Offers various engineering and technical programs
- Known for excellent placement rates (85%)
- Has partnerships with 100+ companies for recruitment
- Features state-of-the-art facilities including advanced labs, digital library, and modern infrastructure

Engineering Programs:
1. Computer Science Engineering - 4-year B.Tech program with focus on programming, data structures, AI, ML
2. Mechanical Engineering - 4-year B.Tech program covering thermodynamics, mechanics, manufacturing
3. Electrical Engineering - 4-year B.Tech program on electrical systems, power generation
4. Civil Engineering - 4-year B.Tech program on structural engineering, construction management
5. Electronics & Communication - 4-year B.Tech program focusing on electronic devices, communication systems

Admissions:
- Based on merit in entrance exams like JEE/State CET
- Management quota also available
- Annual fees range from ₹85,000 to ₹95,000 for B.Tech programs
- Scholarships available for meritorious students

Facilities:
- Advanced laboratories for each department
- Digital library with e-journals and research papers
- Computer centers with high-speed internet
- Training & Placement cell for career development
- Seminar halls and auditoriums
- Separate hostels for boys and girls

Faculty:
- Highly qualified faculty with PhDs and industry experience
- Engaged in research and consultancy projects

Your role is to provide helpful, accurate information about LKCTC to prospective students, parents, and visitors. Be friendly, professional, and informative in your responses.
`

async function createServer() {
  const app = express()

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  })

  // Use vite's connect instance as middleware
  app.use(vite.middlewares)

  // Add JSON body parser
  app.use(express.json())

  // API route for chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body

      // Add system message with college context
      const messagesWithContext = [{ role: "system", content: collegeContext }, ...messages]

      // Set appropriate headers for streaming
      res.setHeader("Content-Type", "text/event-stream")
      res.setHeader("Cache-Control", "no-cache")
      res.setHeader("Connection", "keep-alive")

      // Stream the response
      const stream = streamText({
        model: openai("gpt-4o"),
        messages: messagesWithContext,
        onChunk: (chunk) => {
          if (chunk.type === "text-delta") {
            res.write(`data: ${JSON.stringify({ type: "text", value: chunk.text })}\n\n`)
          }
        },
      })

      stream.text
        .then(() => {
          res.write("data: [DONE]\n\n")
          res.end()
        })
        .catch((error) => {
          console.error("Stream error:", error)
          res.write(`data: ${JSON.stringify({ type: "error", value: "An error occurred" })}\n\n`)
          res.end()
        })
    } catch (error) {
      console.error("Error in chat route:", error)
      res.status(500).json({ error: "Failed to process request" })
    }
  })

  // Serve static files from the dist directory
  app.use(express.static(resolve(__dirname, "dist")))

  // Fallback for SPA routing
  app.get("*", (req, res) => {
    res.sendFile(resolve(__dirname, "dist", "index.html"))
  })

  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

createServer().catch(console.error)
