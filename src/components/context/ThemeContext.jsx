"use client"

// src/context/ThemeContext.jsx
import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode

  // Effect to handle theme change
  useEffect(() => {
    // You could add logic here to toggle classes or variables for a full light theme
    // For this specific implementation, we're defaulting to dark theme
    // and the toggle is more for demonstration purposes
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}
