const GlassMorphicContainer = ({ children, className = "", glow = null }) => {
  let glowClass = ""
  if (glow === "blue") glowClass = "blue-glow"
  else if (glow === "purple") glowClass = "blue-glow" // Changed to blue-glow for consistency

  return <div className={`glassmorphic ${glowClass} ${className}`}>{children}</div>
}

export default GlassMorphicContainer
