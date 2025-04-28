const GlassMorphicContainer = ({ children, className = "", glow = "none", borderGradient = false }) => {
  const glowStyles = {
    none: "",
    purple: "purple-glow",
    cyan: "cyan-glow",
    dual: "purple-glow cyan-glow",
  }

  return (
    <div
      className={`
        glassmorphic rounded-xl p-4 relative overflow-hidden
        ${glowStyles[glow]}
        ${borderGradient ? "border-gradient" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default GlassMorphicContainer
